const express = require('express');
const router = express.Router();

const Book = require('../models/Book');

router.get('/', async (req, res) => {
  res.send('it werking?');
  // try {
  //   const books = await Book.find();
  //   console.log('* * * bookRoutes, get = ', books);
  //   res.json(books);
  // } catch (error) {
  //   console.log('* * * bookRoutes, get ERROR');
  //   res.json({message: error.message});
  // }
});

router.post('/', (req, res) => {
  console.log('* * * addBook; req.body) = ', req.body);

  // create the book obj
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    isbn: req.body.isbn,
    favorite: req.body.favorite,
    pageCount: req.body.pageCount,
    genre: req.body.genre
  });

  // add book to the approp. bookkeeper
});

module.exports = router;