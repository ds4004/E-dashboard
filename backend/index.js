const express = require('express');
const app = express();
const cors = require('cors');

const connecttoDB = require('./config/db');
const User = require('./config/User');
const Product = require('./config/Product');

app.use(express.json());
app.use(cors(
  {
    origin: ["https://e-dashboard-api.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true
  }
));

connecttoDB();

// to check if api is working
app.get('/', (req, resp) => {
  resp.send('App is working');
});

// const connectDB = async () => {
//     mongoose.connect('mongodb://localhost:27017/e-comm');
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model('product', productSchema);
//     const data = await product.find();
//     console.log(data);
// }
// connectDB();

// how to set api for a particular route
// app.post('/register', (req, resp) => {
//   // resp.send('Api connected');  // to check if api is working
//   resp.send(req.body); // to display the same content received as reqest
//   // console.log('api working');
// });

// to insert a object in users
app.post('/register', async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;       // not to display password
  resp.send(result);
  console.log('data inserted');
});

app.post('/login', async (req, resp) => {
  //   resp.send(req.body);
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select('-password');
    if (user) resp.send(user);
    else resp.send({ result: 'No user found' });
  } else resp.send({ result: 'Please provide all data' });
});

app.post('/addProduct', async (req, resp) => {
  let product = new Product(req.body);
  let result = await product.save();
  result = result.toObject();
  resp.send(result);
  console.log('product data inserted');
});

app.get('/products', async (req, resp) => {
  let products = await Product.find();
  if (products.length > 0) {
    resp.send(products);
  }
  else {
    resp.send({ result: "No Product found" })
  }
})

app.delete('/product/:id', async (req, resp) => {
  const result = await Product.deleteOne({ _id: req.params.id });
  resp.send(result);
});

app.get('/product/:id', async (req, resp) => {
  // resp.send(req.params.id);
  const result = await Product.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  }
  else {
    resp.send({ result: "No Record Found" })
  }
});

app.put('/product/:id', async (req, resp) => {
  // resp.send("working");
  const result = await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  if (result) {
    resp.send(result);
  }
  else {
    resp.send({ result: "No Product found" });
  }
});

app.get('/search/:key', async (req, resp) => {
  let result = await Product.find({
    "$or": [
      { name: { $regex: req.params.key } },
      { company: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ]
  });
  resp.send(result);
});

app.listen(5000);