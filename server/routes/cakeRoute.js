import express from 'express';
import {getCakes,addCake} from '../controller/cake_c.js';
const router=express.Router();

router.get('/getAllCakes',getCakes);
router.post('/addCakes',addCake);

export default router;