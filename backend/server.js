import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const server = express();
const PORT = process.env.PORT;

connectDB();

server.listen(PORT, () => {
	console.log('Server listening on port 8080');
});


const noteSchema = new mongoose.Schema({ title: String, content: String }, { timestamps: true });
const Note = mongoose.model('Note', noteSchema);

const newNote = new Note({ title: 'First note!', content: 'This is really cool!' });
await newNote.save();

const allNotes = await Note.find();
console.log(allNotes);

async function connectDB() {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log('Connected to database!');
	} catch (error) {
		console.log('Error connecting to database: ', error);
	}
};
