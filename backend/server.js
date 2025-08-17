import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const server = express();
const PORT = process.env.PORT;

connectDB();


// routes
server.get('/', findAllNotes);
// server.post();
// server.put();
// server.delete();

server.listen(PORT, () => {
	console.log('Server listening on port 8080');
});

// mongoose schema and model
const noteSchema = new mongoose.Schema({ title: String, content: String }, { timestamps: true });
const Note = mongoose.model('Note', noteSchema);

// db
async function connectDB() {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log('Connected to database!');
	} catch (error) {
		console.log('Error connecting to database: ', error);
	}
};

// express middleware
async function findAllNotes(req, res) {
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