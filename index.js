require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('./models/Bookkeeper');

const app = express();

const dbUser = process.env.MONGODB_USER;
const dbPassword = process.env.MONGODB_PASSWORD;
const mongoDB_URI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.xy67p.mongodb.net/test?retryWrites=true&w=majority`;
// const mongoDB_URI = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.xy67p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect(mongoDB_URI || `mongodb://localhost:27017/my-book-shelf`);
// mongoose.connect(mongoDB_URI || `mongodb://localhost:27017/my-book-shelf`, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

require('./routes/bookkeeperRoutes')(app);

// add the if clause for production: it will redirect all the requests to our frontend application, 
// unless we specify any route before this code
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`my books(h)elf is running on port ${PORT}`);
});