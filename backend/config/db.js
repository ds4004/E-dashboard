const mongoose = require('mongoose')
const dotenv = require('dotenv').config();

// console.log(dotenv.parsed)
// const config = require('config');
// const db = config.get('mongoURI');
const db = process.env.mongoURI;

const connectDB = async () => {
    try{
        await mongoose.connect(db);
        console.log('MongoDb Connected');
    }
    catch(err){
        console.log("Error ", err);
        console.log('MongoDb Connection Error');
        process.exit(1);
    }
}

module.exports = connectDB;