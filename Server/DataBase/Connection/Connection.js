const mongoose = require('mongoose');
const dotenv = require('dotenv');

try {
    dotenv.config();
    console.log("Success");
} catch (error) {
    console.error("Error loading .env file:", error);
}

const Connection = async () => {
    const DB_USERNAME = process.env.DB_USERNAME;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DB_NAME = process.env.DB_NAME;
    
    
    const URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@evs.onjd1w0.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=EVS`;

    try {
        await mongoose.connect(URL, {});
        console.log("Db Connected Succesfully!!!");
    } catch (error) {
        console.log("Connection Error with Database", error);
    }
}

module.exports = Connection;