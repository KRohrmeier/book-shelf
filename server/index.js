import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// dotenv = global variable injected by Node at runtime, representing the state of the system environment at runtime
import dotenv from 'dotenv';
dotenv.config();

import bookkeeperRoutes from './routes/bookkeepers.js';
import bookRoutes from './routes/books.js';
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/bookkeepers', bookkeeperRoutes);
app.use('/books', bookRoutes);

const PORT = process.env.PORT || 5000;
const DB_USER = process.env.MONGODB_USER;
const DB_PASSWORD = process.env.MONGODB_PASSWORD;
const CONNECTION_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.xy67p.mongodb.net/bookshelf_dev?retryWrites=true&w=majority`;

mongoose.Promise = global.Promise;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('connected to Mongo'))
  .catch((error) => console.log(`error connecting to Mongo. DB_USER=${DB_USER}, Error = ${error.message}`));

// mongoose.set('useFindAndModify', false);

app.listen(PORT, () => {
  console.log(`books(h)elf server is running on port ${PORT}`);
});