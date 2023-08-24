import express from 'express';
import { getAllUsersApi,createUserApi } from './usersController.js';
import { checkSignature } from '../../middleware/auth.js';

const router = express.Router();

router.get('/getAllUsers',checkSignature, getAllUsersApi); 
router.post('/createUser',checkSignature, createUserApi); 

export default router;