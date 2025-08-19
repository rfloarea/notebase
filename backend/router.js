import express from 'express';
import { findAllNotes, createNewNote, findOneNote } from './controller.js';

export const router = express.Router();

router.get('/', findAllNotes);
router.post('/', createNewNote);
router.get('/:id', findOneNote);
// server.put();
// server.delete();
