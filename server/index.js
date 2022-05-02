const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
// const connection = require('./connection');
const path = require("path");

app.use('/', require(path.join(__dirname, '/routes/travellers.js')));


app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});