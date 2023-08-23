import express from "express";
import apiUsers from "./users/usersRoute.js"

const router = express.Router();

router.use('/users', apiUsers)


export default router;