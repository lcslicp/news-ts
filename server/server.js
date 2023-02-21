import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import data from './api/data.json' assert { type: "json" };;

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Credentials', false);
  next();
});

app.get('/api/data', (req, res) => {
  res.json(data);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('Server running on port 5000');
});
