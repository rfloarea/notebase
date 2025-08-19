import express from 'express';
import { findAllNotes } from './controller.js';

export const router = express.Router();

router.get('/', findAllNotes);
// server.post();
// server.put();
// server.delete();
