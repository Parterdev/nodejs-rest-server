# <a href="https://nodejs.org/es/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" alt="nodejs" width="40" height="40"/> </a> Node.js | REST Server Template

## This project was created with [Node.js v18.4.0](https://nodejs.org/es/blog/release/v18.4.0/) and [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript).</h2>

## 1. Description
This project is a new practical item of my Node.js app series that made with:
 - Node.js v18.4.0
 - [express](https://www.npmjs.com/package/express) - (minimalist web framework to Node.js)
 - [dotenv](https://www.npmjs.com/package/dotenv) - (environment variables from .env file)
 - [cors](https://www.npmjs.com/package/cors) - (middleware package to enable CORS with many options)
 - 😎 Of course, I used things like controllers, models and routes to clean project structure. 

<h2 style="color: #6cc24a">¡Important code notes!</h2>

```
Options:
  - The main logic lives in the app.js (root file) with a single server instance.
  - The folder (routes) is used to store different kind of routes (you'll find users.js route example).
  - The folder (models) contains a server file with a class instance to generate middlewares, routes and listening port.
  - The folder (controllers) is used to serve CRUD (or more) special HTTP methods into the routes files (you'll find users.js controller example).
  - To install dependencies, run: $ npm install || $ yarn install
  - To watch js files changes, run: $ npm app.js -w || $ nodemon app.js 
```

## 2. Notice
<ul>
  <li>
    <span style="background-color: #7fffd4;">Feel free to fork this repo and add your own twist!
    </span>
  </li>
</ul>