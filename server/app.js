// const express = require('express');
// const logger = require('morgan');
// const bodyParser = require('body-parser');

// // Set up the express app
// const app = express();

// // Log requests to the console.
// app.use(logger('dev'));

// // Parse incoming requests data (https://github.com/expressjs/body-parser)
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('*', (req, res) => res.status(200).send({
//   message: 'server up on port 4000.',
// }));

 
// // app.use((req, res, next ) => {
// //  const err = res.status(404).send({
// //  	Error: '404: Sorry Page Not Found'
// //  })
// //  next(err)
// // });      
// module.exports = app;
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './server/routes/recipe';

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
routes(app);

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to More-Recipes'
}));

export default app;
// modules.exports = app;
