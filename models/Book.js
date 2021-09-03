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
    borrowerId: String,
    borrowerName: String,
    startDate: {
      type: Date,
      default: Date.now
    },
    endDate: Date
  }],
  genre: [String],
  dateAdded: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('BookModel', bookSchema);