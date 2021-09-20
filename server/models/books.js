import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  isbn: String,
  authors: [String],
  pageCount: Number,
  favorite: Boolean,
  status: {
    type: String,
    enum: ['borrowed', 'home', 'borrowing'],
    default: 'home'
  },
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
    default: new Date()
  },
  coverImage: String
});

const bookModel = mongoose.model('bookModels', bookSchema);

export default bookModel;