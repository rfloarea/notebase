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

export async function findOneNote(req, res) {
	try {
		const id = req.params.id;
		const note = await Note.findById(id);
		res.status(201).json(note);
		console.log(note);
		if (!note) return res.status(404).json({ message: 'No note found :(' });
	} catch (error) {
		res.status(500).json({ message: 'Interal server error :( Could not find note' });
		console.error(error);
	}
};

export async function updateOneNote(req, res) {
	try {
		const id = req.params.id;
		const { title, content } = req.body;
		const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true }); // returns newly updated note
		if (!updatedNote) return res.status(404).json({ message: 'No note found' });
		res.status(200).json(updatedNote);
		console.log(updatedNote);
	} catch (error) {
		res.status(500).json({ message: 'Internal server error :( Could not update note' });
		console.error(error);
	}
};
//
//function deleteOneNote('/:id') {
//
//};
//
//function deleteAllNotes() {
//
//};