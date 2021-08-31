require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

console.log('index.js process.env.MONGODB_URI = ', process.env.MONGODB_URI);
const dbUser = process.env.MONGODB_USER;
const dbPassword = process.env.MONGODB_PASSWORD;
const mongoDBURI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.xy67p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log('mongoDBURI built-up connection = ', mongoDBURI);
mongoose.Promise = global.Promise;
mongoose.connect(mongoDBURI || `mongodb://localhost:27017/my-book-shelf`);

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`my books(h)elf is running on port ${PORT}`);
});