import express from 'express';
import dotenv from 'dotenv';
import data from './api/data.js';

dotenv.config();
const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://nownewsdemo.lcslicp.dev');
  res.header('Access-Control-Allow-Credentials', false);
  next();
});

app.get('/api/data', (req, res) => {
  res.json(data);
});

app.get('/', (req, res) => { res.send('Hello from Backend!')});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server running on port 5000');
});
