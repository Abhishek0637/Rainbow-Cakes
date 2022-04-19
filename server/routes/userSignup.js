import express from 'express';
import {Signup,createUser,Login} from './../controller/user_c.js';
const router=express.Router();

router.get('/',Signup);
router.post('/createUser',createUser);
router.post('/Login',Login);
export default router;                                                              
  