import { Note } from './model.js';

export async function findAllNotes(req, res) {
	try {
		const allNotes = await Note.find();
		await res.status(200).send('GET request successful.');
		console.log('GET request successful.');
	} catch (error) {
		await res.status(404).send('GET request error: 404');
		console.log('GET request error: ', error);
	}
};
//function createNewNote() {
//
//};
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