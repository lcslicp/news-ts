import express from 'express';
import dotenv from 'dotenv'
import apiRouter from './routes/newsRoutes.js';
import apiKeyRouter from './routes/apiKey.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://news-ts.vercel.app/');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'x-api-key');
    next();
  });


  app.get('/', (req, res) => { res.send('Hello from Backend!')});
app.use('/api', apiKeyRouter);
app.use('/api', apiRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server running on port 5000');
})