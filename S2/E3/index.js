import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(cors({
	origin: process.env.ORIGIN, // your React app URL
	methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
	credentials: true // important for cookies/auth headers
}));

app.use('/', (req, res) => {
	// res.status(200).send('Namaste Node');
	res.status(200).json({ message: 'Namaste Node' })
})

app.use('/about', (req, res) => {
	// res.status(200).send('Namaste Node');
	res.status(200).json({ message: 'This is About page' })
})


app.listen(process.env.PORT, () => {
	console.log(`Server listening on the port: ${process.env.PORT}`)
})