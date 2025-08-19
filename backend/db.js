import mongoose from 'mongoose';

export async function connectDB() {
	try {
		await mongoose.connect(process.env.MONGODB_URI);
		console.log('Connected to database!');
	} catch (error) {
		console.error('Error connecting to database: ', error);
	}
};