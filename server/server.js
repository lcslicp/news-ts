import express from 'express';
import apiRouter from './routes/newsRoutes.js';

const app = express();

app.use(express.json());
app.use('/api', apiRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server running on port 5000');
})