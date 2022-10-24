// Importing Express and utilites
const express = require('express');
const bodyParser = require('body-parser');
// Upload env variables
require('dotenv').config();
// Using CORS
const cors = require('cors');
// Using router 
const routerUser = require('../routes/users');
// Using DB functions
const {dbConnection} = require('../db/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.routePathList = [
      '/api/users'
    ];

    // Connect to DB (Mongo)
    this.connectDB();

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();

  }

  // Middlewares
  middlewares() {
    // Server static content
    this.app.use(express.static('public'));
    // Parsing application/json
    this.app.use(bodyParser.json());
    // Enable CORS
    this.app.use(cors());
  }

  // To connect with DB
  async connectDB() {
    await dbConnection();
  } 


  // Uploading routes here
  routes() {
    // Destructuring path array and pass them into app use
    const [users] = this.routePathList;
    // console.log("ROUTER USER", routerUser)
    this.app.use(users, routerUser);
  }

  // To listening enabled proccesses
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Listening Node.js server on port: ${this.port}`);
    });
  }

}

module.exports = Server;