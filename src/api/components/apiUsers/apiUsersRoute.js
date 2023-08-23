import express from 'express';
import { getUserIp } from './apiUsersController.js';

const router = express.Router();

router.get('/ip', getUserIp); //use this to match local ip and set numberOfProxy in config

export default router;