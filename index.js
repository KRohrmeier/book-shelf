require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./models/Bookkeeper');

// Express = in MERN stack applications, Express's role is to manage our backend API server,
// the one from which we will be fetching data from a database via our React frontend
// Express listens to a particular port of our server for requests from the user/frontend.
// We can create different routes for each endpoint which the user accesses. Or, we can use 
// the core http module that NodeJS provides us to create these routes.
const app = express();  

app.use(cors());
app.use(bodyParser.json());

const dbUser = process.env.MONGODB_USER;
const dbPassword = process.env.MONGODB_PASSWORD;
const mongoDB_URI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.xy67p.mongodb.net/bookshelf_dev?retryWrites=true&w=majority`;
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to DB!'));


// currently a silly middleware function (but could use for authentication, mayhaps?)
app.use('/auth', () => {
  console.log('middleware - hitting an auth route');
});

const bookkeeperRoute = require('./routes/bookkeeperRoutes');
app.use('/bookkeeper', bookkeeperRoute);

// add the if clause for production: it will redirect all the requests to our frontend application, 
// unless we specify any route before this code
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
};

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`my books(h)elf is running on port ${PORT}`);
});