import bookModel from '../models/books.js';

export const getBooks = async (req, res) => {
  try {
    console.log('I can haz werking? Is books.');
    const books = await bookModel.find();
    return res.status(200).json(books);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBooks = async (req, res) => {
  console.log('in create book');
  const book = req.body;
  console.log('in create book, req.body = ', book);
  const newBook = new bookModel(book);
  try {
    res.send('I can haz werking? book creation !');
    await newBook.save(); 
    return res.status(201).json(newBook);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};