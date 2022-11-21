import express from 'express';
import validate from '../middleware/validate';
import {studnet_schema,StudentSchemaType,} from '../zod_schema/studnet_schema';

const router = express.Router();

 let studnet: StudentSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.json(studnet);
});

router.post('/', validate(studnet_schema), (req, res, next) => {
  const newstudnet= req.body as StudentSchemaType;

  studnet.push(newstudnet);
  return res.status(201).json({ message: 'Studnet Added !' });
});



router.put(`/:id`, validate(studnet_schema),(req, res) => {
    const updatestudnet = req.body as StudentSchemaType;
    const { id } = req.params;
    const updatestudnetsList = studnet.filter((umovie:any) => {
      return umovie.id !== id;
    });
    updatestudnetsList.push(updatestudnet);
    studnet = updatestudnetsList;
    res.json({
      message: "Studnet Update",
    });
  });
  
  router.delete(`/:id`, (req, res) => {
   
    const { id } = req.params;
    const deletestudnetList = studnet.filter((dstudnet) => {
      return dstudnet.id !== id;
    });
    studnet = deletestudnetList;
    res.json({
      message: "Studnet Delete",
    });
  });
  router.get(`/search/:id`, (req, res) => {
   
    const { id } = req.params;
    const searchstu = studnet.filter((dstudnet) => {
     if(dstudnet.name===id || dstudnet.major===id || dstudnet.id===id){
      return dstudnet;
     }
    });
    
    res.json(searchstu);
  });

export default router;