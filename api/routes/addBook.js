var express = require("express");
var router = express.Router();
var url = require("url");
var {appendFile, readdir} = require("fs");
var {readFile} = require("fs").promises;

var bookList = require("../bookList.json");
// const bookFile = 'bookList.json';
const bookFile = 'dev.txt';
let bookToAdd;

// readFile(fileToRead, "utf8")
//   .then(text => console.log('The file contains: ', text))
//   .catch(error => console.log('Error reading file. ERROR: ', error));

// appendFile(bookFile, bookToAdd, error => {
//   if (error) console.log('Failed to write file: ', error);
//   else console.log('appendFile did not fail => Added book');
// });
appendFile(bookFile, bookToAdd, error => {
  console.log('appendFile bookToAdd = ', bookToAdd);
  if (error) console.log('Failed to write file: ', error);
  else console.log('appendFile did not fail => Added book');
});


  //TODO: add some checking that a title exists & append in an if conditional
router.get("/", function(req, res, next) {
  console.log('in api/addBook');
  console.log('api/addBook, req = ', req);
  bookToAdd = url.parse(req.url, true).query;
  console.log('api/addBook parsed url = ', bookToAdd);
  appendFile();
  res.send('added book: ', bookToAdd);
});

module.exports = router;
