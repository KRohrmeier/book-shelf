import express from 'express';
const router = express.Router();

import { getBooks, createBooks } from '../controllers/books.js';

router.get('/', getBooks);
router.post('/', createBooks);
// router.patch('/', getBooks);
// router.delete('/', getBooks);

export default router;