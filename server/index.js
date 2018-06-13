const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors')

const app = express();

const port = 3000;

//app.use(cors())

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));

app.listen(port, () => {
  console.log('listening on port ', port);
})