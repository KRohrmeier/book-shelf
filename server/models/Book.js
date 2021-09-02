const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: [String],
  isbn: String,
  favorite: Boolean,
  status: {
    type: String,
    enum: ['borrowed', 'home', 'borrowing'],
    default: 'home'
  },
  pageCount: Number,
  lendingHistory: [{
    borrower: String,
    startDate: {
      type: Date,
      default: Date.now
    },
    endDate: Date
  }],
  genre: [{
    type: String
  }]
});

module.exports = mongoose.model('BookModel', bookSchema);