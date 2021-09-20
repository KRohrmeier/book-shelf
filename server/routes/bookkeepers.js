import express from 'express';
const router = express.Router();

import { getBookkeepers, createBookkeeper } from '../controllers/bookkeepers.js';

router.get('/', getBookkeepers);
router.post('/', createBookkeeper);

export default router;