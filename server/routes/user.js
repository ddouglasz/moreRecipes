import express from 'express';

 
const app = express.Router();

app.get('/api/recipes', (req, res) => res.status(200).send({
  message: 'Welcome to the morerecipe API!',
}));

 

export default app;
