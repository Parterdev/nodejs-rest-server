// Getting started with Mongoose
const mongoose = require('mongoose');
// Upload env variables
require('dotenv').config();

const dbConnection = async() => {
  try { 
    // Provide URL connection from env variables
    await mongoose.connect(process.env.MONGO_DB_CONNECT);
    console.log('Successfully connection...');
  }catch(err) {
    console.log(err);
    throw new Error('Error while connecting to mongoDB instance');
  }
};

module.exports = {
  dbConnection
}