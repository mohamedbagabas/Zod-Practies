import express from 'express';
import MovieRouter from './routes/movie';
import StudnetRouter  from './routes/studnet'
import BankRouter from './routes/bank'
const app = express();

app.use(express.json());

app.use('/movie', MovieRouter);
app.use('/studnet', StudnetRouter);
app.use('/bank', BankRouter);


app.listen(5000, () => {
  console.log('Server is running in port 5000');
});


