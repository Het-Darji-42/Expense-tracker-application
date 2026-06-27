    const mongoose = require("mongoose");
    const dotenv = require("dotenv").config();


    const connectToDb = async ( ) => { 
    try {
    const connToDb = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongo conn successful");
    } catch (error) {
    console.error("mongo conn error");
    }
    }


    module.exports = connectToDb;
