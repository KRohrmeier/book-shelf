var express = require("express");
var router = express.Router();
var bookList = require("../bookList.json");

router.get("/", function(req, res, next) {
  res.send(bookList);
});

module.exports = router;