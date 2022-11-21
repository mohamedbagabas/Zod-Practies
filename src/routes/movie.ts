import express from 'express';
import validate from '../middleware/validate';
import {movie_schema,MovieSchemaType,} from '../zod_schema/movie_schema';

const router = express.Router();

 let movie: MovieSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.json(movie);
});

router.post('/', validate(movie_schema), (req, res, next) => {
  const newmovie= req.body as MovieSchemaType;

  movie.push(newmovie);
  return res.status(201).json({ message: 'Movie Added !' });
});



router.put(`/:id`, validate(movie_schema),(req, res) => {
    const updatemovie = req.body as MovieSchemaType;
    const { id } = req.params;
    const updatemoviesList = movie.filter((umovie:any) => {
      return umovie.id !== id;
    });
    updatemoviesList.push(updatemovie);
    movie = updatemoviesList;
    res.json({
      message: "Movie Update",
    });
  });
  
  router.delete(`/:id`, (req, res) => {
   
    const { id } = req.params;
    const deletemovieList = movie.filter((dmovie) => {
      return dmovie.id !== id;
    });
    movie = deletemovieList;
    res.json({
      message: "Movie Delete",
    });
  });
  router.get(`/search/:id`, (req, res) => {
   
    const { id } = req.params;
    const searchmov = movie.filter((dmovie) => {
     if(dmovie.name===id || dmovie.gener===id || dmovie.id===id){
      return dmovie;
     }
    });
    
    res.json(searchmov);
  });

export default router;