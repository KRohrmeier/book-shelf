const mongoose = require('mongoose');
const bookkeeperSchema = require('../models/Bookkeeper');
const Bookkeeper = mongoose.model('bookkeeper', bookkeeperSchema);

module.exports = (app) => {
  
  app.get(`/api/bookkeeper`, async (req, res) => {
    let bookkeepers = await Bookkeeper.find();
    return res.status(200).send(bookkeepers);
  });

  app.post(`/api/bookkeeper`, async (req, res) => {
    let bookkeeper = await Bookkeeper.create(req.body);
    return res.status(200).send({
      error: false,
      bookkeeper
    });
  });

  app.delete(`/api/bookkeeper/:id`, async (req, res) => {
    const { id } = req.params;
    let bookkeeper = await Bookkeeper.findByIdAndDelete(id);
    return res.status(200).send({
      error: false,
      bookkeeper
    });
  });
}