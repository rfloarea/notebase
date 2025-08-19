import express from 'express';
import { findAllNotes, createNewNote } from './controller.js';

export const router = express.Router();

router.get('/', findAllNotes);
router.post('/', createNewNote);
// server.put();
// server.delete();
