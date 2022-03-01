import express from 'express';
import cors from 'cors';
import createQuizRouter from './routers/create-quiz';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/createQuiz', createQuizRouter);

app.get('/', (req, res, next) => {
  res.send('hello there');
});

app.listen(8080, () => {
  console.log('listening on 8080');
});
