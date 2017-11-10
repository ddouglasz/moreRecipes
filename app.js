import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import routes from './server/routes/index';

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to more-Recipes.',
}));
module.exports = app;