import express from 'express';
import validate from '../middleware/validate';
import {bank_schema,BankSchemaType,} from '../zod_schema/bank_schema';

const router = express.Router();

 let bank: BankSchemaType[] = [];

router.get('/', (req, res, next) => {
  return res.json(bank);
});

router.post('/', validate(bank_schema), (req, res, next) => {
  const newbank= req.body as BankSchemaType;

  bank.push(newbank);
  return res.status(201).json({ message: 'customer Added !' });
});



router.put(`/:id`, validate(bank_schema),(req, res) => {
    const updatebank = req.body as BankSchemaType;
    const { id } = req.params;
    const updatebanksList = bank.filter((umovie:any) => {
      return umovie.id !== id;
    });
    updatebanksList.push(updatebank);
    bank = updatebanksList;
    res.json({
      message: "customer Update",
    });
  });
  
  router.delete(`/:id`, (req, res) => {
   
    const { id } = req.params;
    const deletebankList = bank.filter((dbank) => {
      return dbank.id !== id;
    });
    bank = deletebankList;
    res.json({
      message: "customer Delete",
    });
  });
  router.get(`/search/:id`, (req, res) => {
   
    const { id } = req.params;
    const searchbank = bank.filter((dbank) => {
     if(dbank.username===id || dbank.id===id){
      return dbank;
     }
    });
    
    res.json(searchbank);
  });

export default router;