import express from 'express';
import mongoose from 'mongoose';
import { connectDB } from './db.js';
import { router } from './router.js';

import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/', router);

connectDB()
	.then(() => {
		app.listen(PORT, () => {
			console.log('Server listening on port 8080');
		});
	})
	.catch(console.error());