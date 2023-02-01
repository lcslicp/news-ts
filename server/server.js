import express from 'express';
import cors from 'cors';
import apiRouter from './routes/newsRoutes.js';

const app = express();

const corsOptions = {
    origin: '*',
    methods: ['GET']
}

app.use(cors(corsOptions));
app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

app.use('/api', apiRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server running on port 5000');
})