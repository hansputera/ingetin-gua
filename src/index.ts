import express from 'express';
import cors from 'cors';
import { config } from './config.js';
import { assignments_router } from './routers/assignments.js';

const app = express();

// Registering middlewares
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	}),
);
app.use(cors());

// Registering routers
app.use('/assignments', assignments_router);

app.get('/', (_, res) => {
	res.send('Hello World!');
});

app.listen(config.PORT, () => {
	console.log(`Server is running on http://localhost:${config.PORT}`);
});
