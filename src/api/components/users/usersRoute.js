import express from 'express';
import { getAllUsersApi } from './usersController.js';
import { checkSignature } from '../../middleware/auth.js';

const router = express.Router();

router.get('/getAllUsers',checkSignature, getAllUsersApi); 

export default router;