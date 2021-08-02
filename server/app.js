var express = require("express");
var bodyParser = require('body-parser');
const dotenv = require("dotenv");
var app = express();
var port = 3000;

// w/line below, process.env now has the keys and values defined in your .env file
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
 console.log("Server listening on port " + port);
});

// mayhaps we need to set different headers to app.get()/app.use() .js files?
// https://stackoverflow.com/questions/61997178/res-sendfile-shows-my-html-but-doesnt-render-react-components

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_MONGOOSE_CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true });

var bookkeeperSchema = new mongoose.Schema({
    givenName: String,
    email: String,
    phone: String
});

// mongoose is creating 
var Bookkeeper = mongoose.model("BookkeeperModel", bookkeeperSchema);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/addBookkeeper", (req, res) => {
  console.log('* * * in addBookkeeper; req.body) = ', req.body);
  
  var newBookkeeper = new Bookkeeper({ 
    givenName: req.body.givenName,
    email: req.body.email,
    phone: req.body.phone
  });
  console.log('newBookkeeper = ', newBookkeeper);
  // var newBookkeeper = new Bookkeeper(req.body);
  newBookkeeper.save()
    .then(bookkeeper => {
      res.send("bookkeeper saved to database");
    })
    .catch(err => {
      res.status(400).send("WHOOPS! Unable to save bookkeeper to database :( ");
    })
});
