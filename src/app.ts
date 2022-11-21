import express from 'express';
import RideRouter from './routes/employee';


const app = express();

app.use(express.json());

app.use('/movie', RideRouter);


app.listen(5000, () => {
  console.log('Server is running in port 5000');
});


