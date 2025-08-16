import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const server = express();
const PORT = process.env.PORT;

server.listen(PORT, () => {
	console.log('Server listening on port 8080');
});
connectDB();

async function connectDB() {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log('Connected to database!');
	} catch (error) {
		console.log('Error connecting to database: ', error);
	}
}