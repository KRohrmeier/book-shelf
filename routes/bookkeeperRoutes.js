const express = require('express');
const router = express.Router();

const Bookkeeper = require('../models/Bookkeeper');

router.get('/', async (req, res) => {
  const bookkeepers = await Bookkeeper.find();
  console.log('* * * bookkeeperRoutes, get bookkeepers = ', bookkeepers);
  try {
    res.json(bookkeepers);
  } catch (error) {
    res.json({message: error});
  }
});

// why this work in Postman?? why req.body EMPTY?
router.post("/", (req, res) => {
  console.log('* * * addBookkeeper; req.body) = ', req.body);
  const newBookkeeper = new Bookkeeper({ 
    givenName: req.body.givenName,
    familyName: req.body.familyName,
    nickName: req.body.nickName,
    email: req.body.email,
    phone: req.body.phone
  });
  newBookkeeper.save()
  .then((data) => {
    const parsedData = res.json(data);
    console.log('* * * addBookkeeper; parsedData.statusCode = ', parsedData.statusCode);
    console.log('* * * addBookkeeper; parsedData.statusMessage = ', parsedData.statusMessage);
  })
  .catch((error) => {
    res.json({message: error})
  });
});

router.get('/:email', (req, res) => {
  console.log('specific bookkeeper email = ', req.params.email);
  Bookkeeper.findOne({'email': req.params.email}, function(err, res) {
    if (err) {
      return {message: err}
    } else {
      return res;
    }
  });
});

// deleteOnereturns object with the following (+more, ofcourse):
// n – number of matched documents
// ok – 1 if the operation was successful
// deletedCount – number of documents deletedCount
router.delete('/:email', async (req, res) => {
  console.log('in delete');
  try {
    const removedBookkeeper = await Bookkeeper.deleteOne({'email': req.params.email});
    console.log('delete removedBookkeeper = ', removedBookkeeper);
    res.send(removedBookkeeper);
  } catch (error) {
    res.send({message: error});
  }

});

//TODO: why it not let me use a variable for the key value of the set object???
router.patch('/:email/:field', async (req, res) => {
  console.log('in patch');
  const { field, email } = req.params;
  const setObject = {field: req.body.data}
  // TODO: do we need to make an api call to get the id and then use that to make this call to update
  try {
    const updatedBookkeeper = await Bookkeeper.updateOne(
      {email: email},
      {$set: setObject}
    );
    res.json(updatedBookkeeper);
  } catch (error) {
    res.json({ message: error })
  }
});

module.exports = router;

/*
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

  app.post("/addBookkeeper", (req, res) => {
    console.log('* * * in addBookkeeper; req.body) = ', req.body);
    var newBookkeeper = new Bookkeeper({ 
      givenName: req.body.givenName,
      familyName: req.body.familyName,
      nickName: req.body.nickName,
      email: req.body.email,
      phone: req.body.phone
    });
    console.log('newBookkeeper = ', newBookkeeper);
    // var newBookkeeper = new Bookkeeper(req.body);
    newBookkeeper.save()
      .then(bookkeeper => {
        res.send("bookkeeper saved to database");
      })
      .catch(err => {
        res.status(400).send("WHOOPS! Unable to save bookkeeper to database :( ");
      })
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
*/