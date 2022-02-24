import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res, next) => {
  res.send('hello there');
});

app.listen(8080, () => {
  console.log('listening on 8080');
});
