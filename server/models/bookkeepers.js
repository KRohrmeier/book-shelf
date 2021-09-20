import mongoose from "mongoose";

const bookkeeperSchema = mongoose.Schema({
  givenName: {
    type: String
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
  password: {
    type: String,
    required: true
  },
  phone: String,
  dateJoined: {
    type: Date,
    default: new Date()
  },
  dateUpdated: {
    type: Date,
    default: new Date()
  },
  friends: [String]
});

const BookkeeperModel = mongoose.model("BookkeeperModel", bookkeeperSchema);
export default BookkeeperModel;