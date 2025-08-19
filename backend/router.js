import express from 'express';
import { findAllNotes, createNewNote, findOneNote, updateOneNote } from './controller.js';

export const router = express.Router();

router.get('/', findAllNotes);
router.post('/', createNewNote);
router.get('/:id', findOneNote);
router.put('/:id', updateOneNote);
// router.delete(':/id', deleteOneNote);
// router.delete('/', deleteAllNotes);
