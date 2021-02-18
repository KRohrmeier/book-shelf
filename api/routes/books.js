var express = require("express");
var router = express.Router();
var bookList = require("../bookList.json");

router.get("/", function(req, res, next) {
  res.send({
    "authors": ["Kathrin Kohler"],
    "dateAdded": "2010-05-13",
    "favorite": "true",
    "genre": 
      [
        "reference", 
        "imaginary", 
        "rare",
        "first edition"
      ],
    "isbn": "9780000000000",
    "onLoan": "false",
    "pageCount": "100000",
    "title": "Dictionary of Imaginary Words",
    "borrowers": 
    [
      "Leroy Jenkins"
    ]
  });
});

module.exports = router;
