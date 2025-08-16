import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const server = express();
const PORT = process.env.PORT;

server.listen(PORT, () => {
	console.log('Server listening on port 8080');
});