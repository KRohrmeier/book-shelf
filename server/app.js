var express = require("express");
var app = express();
var port = 3000;

const router = express.Router();
// app.get("/", (req, res) => {
//  res.send("Hello Unicorn Army");
// });

 
app.listen(port, () => {
 console.log("Server listening on port " + port);
});

// mayhaps we need to set different headers to app.get()/app.use() .js files?
// https://stackoverflow.com/questions/61997178/res-sendfile-shows-my-html-but-doesnt-render-react-components

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://<userName>:<password>0.xy67p.mongodb.net/bookshelf_dev");

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
  console.log('* * * HERE! req = ', req);
  
  var newBookkeeper = new Bookkeeper({ givenName: "hereIsAName", email: "hereIsAnEmail", phone: "hereIsAPhone" });
  // var newBookkeeper = new Bookkeeper(req.body);
  newBookkeeper.save()
    .then(book => {
      res.send("bookkeeper saved to database");
    })
    .catch(err => {
      res.status(400).send("WHOOPS");
    })
});

// export const sendEmailAddress = (data) => {
//   return fetch('/api/braze/contact', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   }).then((res) => res.json());
// };

// const sendToBraze = attributes => {
//   const body = createAliasBody(attributes);
//   const options = {
//     method: 'POST',
//     uri: BRAZE_URL,
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: body,
//     json: true
//   };
//   return rp(options);
// };

// router.post('/contact', (req, res) => {
//   if (
//     !req.body.disease ||
//     !req.body.email ||
//     !req.body.group ||
//     !req.body.reason
//   ) {
//     return res.status(400).json({
//       error: `required information is missing`
//     });
//   }

//   sendToBraze(req.body)
//     .then(brazeRes => res.json(brazeRes))
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// const fieldValues = this.getAllValues(); <- object = {disease: 'asthma', email: 'email.com'}
//     sendEmailAddress(fieldValues)
//       .then((response) => {
//         if (response.message === 'success') {
//           afterSubmit('success');
//         }
//       );