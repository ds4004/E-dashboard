const express = require('express');
const app = express();
const cors = require('cors');

const connecttoDB = require('./config/db');
const User = require('./config/User');

app.use(express.json());
app.use(cors());

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

app.listen(5000);