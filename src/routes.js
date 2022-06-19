import { Router } from "express";
import { createTable, insertInvestimento, updateInvestimento, selectInvestimentos, selectInvestimento, deleteInvestimento } from './controller/Investimento.js';

const router = Router();

router.get('/', (req,res)=>{
    res.json({
        "statusCode":200,
        "msg": "Api rodando"
    })
})

router.get('/investimentos', selectInvestimentos);
router.get('/investimento', selectInvestimento);
router.post('/investimento', insertInvestimento);
router.put('/investimento', updateInvestimento);
router.delete('/investimento', deleteInvestimento);

export default router;