const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// configure using the environment variables from the .env file
require('dotenv').config();

// create an express server
const app = express();
const port = process.env.PORT || 5000;

// create middleware, and allow us to parse json
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //possibly don't need this?

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established :) ');
});

// start the server
app.listen(port, () => {
  console.log('Server is running on port: ', port);
});

// installed nodemon, so type `nodemon server` in terminal to start
