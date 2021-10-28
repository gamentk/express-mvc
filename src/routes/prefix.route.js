import express from 'express';
import { getPrefix } from '../controllers/prefix.controller';

const router = express.Router();

router.get('/', getPrefix);

export default router;