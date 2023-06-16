const express = require('express');
const app = express();

const connecttoDB = require('./config/db');
const User = require('./config/User');

app.use(express.json());

connecttoDB();

// how to set api for a particular route
// app.post("/register", (req, resp)=>{
//     // resp.send("Api connected");  // to check if api is working
//     resp.send(req.body);            // to display the same content received as reqest 
//     // console.log("api working");
// })

// to insert a object in users
app.post("/register", async(req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
    console.log("data inserted");
});

// const connectDB = async () => {
//     mongoose.connect('mongodb://localhost:27017/e-comm');
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model('product', productSchema);
//     const data = await product.find();
//     console.log(data);
// }
// connectDB();

// to check if api is working
app.get("/", (req, resp)=>{
    resp.send("App is working");
});

app.listen(5000)