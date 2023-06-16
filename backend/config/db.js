const mongoose = require('mongoose')

const config = require('config');
const db = config.get('mongoURI');

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