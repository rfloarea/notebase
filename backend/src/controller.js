import { Note } from './model.js';

export async function findAllNotes(req, res) {
	try {
		const allNotes = await Note.find().sort({ createdAt: -1 }); // -1 sorts notes in desc. order (newest to oldest)
		await res.status(200).json(allNotes);
		console.log(`Find successful: ${allNotes}`);
	} catch (error) {
		await res.status(404).json({ message: 'Internal server error' });
		console.log(error);
	}
};
export async function createNewNote(req, res) {
	try {
		const { title, content } = req.body;
		const newNote = new Note({ title, content });
		const savedNote = await newNote.save();
		await res.status(200).json(savedNote);
		console.log(`Save successful: ${savedNote}`);
	} catch (error) {
		await res.status(500).json({ message: 'Internal server error' });
		console.error(error);
	}
};

export async function findOneNote(req, res) {
	try {
		const id = req.params.id;
		const note = await Note.findById(id);
		if (!note) return await res.status(404).json({ message: 'No note found :(' });
		await res.status(201).json(note);
		console.log(`Find successful: ${note}`);
	} catch (error) {
		await res.status(500).json({ message: 'Interal server error' });
		console.error(error);
	}
};

export async function updateOneNote(req, res) {
	try {
		const id = req.params.id;
		const { title, content } = req.body;
		const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true }); // returns newly updated note
		if (!updatedNote) return await res.status(404).json({ message: 'No note found' });
		await res.status(200).json(updatedNote);
		console.log(`Update successful: ${updatedNote}`);
	} catch (error) {
		await res.status(500).json({ message: 'Internal server error' });
		console.error(error);
	}
};

export async function deleteOneNote(req, res) {
	try {
		const id = req.params.id;
		const note = await Note.findById(id);
		if (!note) return await res.status(404).json({ message: 'Note not deleted. Could not find :(' });
		await Note.findByIdAndDelete(id);
		await res.status(200).json({ message: `Note deleted! ID: ${id}` });
		console.log(`Delete successful: ${note}`);
	} catch (error) {
		await res.status(500).json({ message: 'Internal server error' });
		console.error(error);
	}
};

export async function deleteAllNotes(req, res) {
	try {
		const num = await Note.deleteMany({});
		const count = num.deletedCount;
		if (!count) return await res.status(204).json({ message: 'No notes to delete.' });
		await res.status(200).json({ message: `${count} notes deleted!` });
		console.log(`Delete successful: ${count} notes deleted`);
	} catch (error) {
		await res.status(500).json({ message: 'Internal server error' });
		console.error(error);
	}
};