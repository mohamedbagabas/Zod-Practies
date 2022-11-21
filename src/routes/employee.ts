import express from 'express';
import validate from '../middleware/validate';
import {rideSchema,RidesSchemaType,} from '../zod_schema/employee_schema';

const router = express.Router();

 let rides: RidesSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.json(rides);
});

router.post('/', validate(rideSchema), (req, res, next) => {
  const newride= req.body as RidesSchemaType;

  rides.push(newride);
  return res.status(201).json({ message: 'Movie Added !' });
});



router.put(`/:id`, validate(rideSchema),(req, res) => {
    const updatedride = req.body as RidesSchemaType;
    const { id } = req.params;
    const updatedridesList = rides.filter((uride:any) => {
      return uride.id !== id;
    });
    updatedridesList.push(updatedride);
    rides = updatedridesList;
    res.json({
      message: "Movie Update",
    });
  });
  
  router.delete(`/:id`, (req, res) => {
   
    const { id } = req.params;
    const deletedrideList = rides.filter((dride) => {
      return dride.id !== id;
    });
    rides = deletedrideList;
    res.json({
      message: "Movie Delete",
    });
  });
  router.get(`/search/:id`, (req, res) => {
   
    const { id } = req.params;
    const searchmov = rides.filter((dride) => {
     if(dride.name===id || dride.gener===id){
      return dride;
     }
    });
    
    res.json(searchmov);
  });

export default router;