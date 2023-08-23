import express from 'express';
import { getAllUsersApi } from './usersController.js';

const router = express.Router();

router.get('/getAllUsers', getAllUsersApi); 

export default router;