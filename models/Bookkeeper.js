const mongoose = require('mongoose');

const bookkeeperSchema = new mongoose.Schema({
  givenName: {
    type: String,
    required: true
  },
  familyName: String,
  nickName:  {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: String,
  dateJoined: Date,
  dateUpdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("BookkeeperModel", bookkeeperSchema);
