import express from 'express';
import dotenv from 'dotenv'
import apiRouter from './routes/newsRoutes.js';
import apiKeyRouter from './routes/apiKey.js';

dotenv.config();
const app = express();

app.use(express.json());

app.get('/key', (req, res) => {
  const apiKey = process.env.API_KEY;
  res.send({ apiKey });
});

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'x-api-key');
    next();
  });

app.use('/api', apiRouter);
app.use('/api', apiKeyRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server running on port 5000');
})