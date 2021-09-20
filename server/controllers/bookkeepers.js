import bookkeeperModel from '../models/bookkeepers.js';


export const getBookkeepers = async (req, res) => {
  try {
    console.log('I can haz werking? Is bookkeepers.');
    const keepers = await bookkeeperModel.find();
    return res.status(200).json(keepers);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const createBookkeeper = async (req, res) => {
  const bookkeeper = req.body;
  console.log('in create bookkeeper, req.body = ', bookkeeper);
  const newBookkeeper = new bookkeeperModel(bookkeeper);
  console.log('new bookkeeper to create: ', newBookkeeper);
  try {
    res.send('Iz werking? bookkeeper creation!');
    await newBookkeeper.save(); 
    return res.status(201).json(newBookkeeper);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};