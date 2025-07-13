import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import newsRouter from './routes/newsRoutes.js';
import sodokuRouter from './routes/sodokuRoute.js'

dotenv.config();
const app = express();

app.use(cors({
  origin: 'https://nownews.lcslicp.dev/',
  credentials: true,
}))

app.use(express.json());

app.use('/api', newsRouter);
app.use('/api', sodokuRouter);

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
