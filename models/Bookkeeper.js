const mongoose = require('mongoose');

const bookkeeperSchema = new mongoose.Schema({
  givenName: String,
  familyName: String,
  nickName: String,
  email: String,
  phone: String
});

const Bookkeeper = mongoose.model("BookkeeperModel", bookkeeperSchema);

// export default Bookkeeper;