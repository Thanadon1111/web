// book = "express": "^4.17.1"
const express = require("express");
const movieRouter = require('./movie');

const app = express();

app.use('/movies', movieRouter);

app.get('/', (request, response) => response.redirect('/movies'));

app.listen(8080, () => {
  console.log('Server is listening to http://localhost:8080');
});
