import { Note } from './model.js';

export async function findAllNotes(req, res) {
	try {
		const allNotes = await Note.find();
		await res.status(200).send(allNotes);
		console.log('GET request successful.');
	} catch (error) {
		await res.status(404).send('GET request error: 404');
		console.log('GET request error: ', error);
	}
};
export async function createNewNote(req, res) {
	try {
		const { title, content } = req.body;
		const newNote = new Note({ title, content });
		const savedNote = await newNote.save();
		res.status(200).json(savedNote);
		console.log(`Saved note: ${savedNote}`);
	} catch (error) {
		console.error(error);
		await res.status(500).json({ message: 'Internal server error :( Could not create note' });
	}
};
//
//function findOneNote('/:id') {
//
//};
//
//function updateOneNote(':/id') {
//
//};
//
//function deleteOneNote('/:id') {
//
//};
//
//function deleteAllNotes() {
//
//};