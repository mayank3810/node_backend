import express from "express";
import users from "./users/usersRoute.js"

const router = express.Router();

router.use('/users', users)
router.get('/ip', (request, response) => response.send(request.ip)) //use this to match local ip and set numberOfProxy in config


export default router;