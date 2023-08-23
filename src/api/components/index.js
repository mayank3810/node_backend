import express from "express";
import apiUsers from "./apiUsers/apiUsersRoute.js"

const router = express.Router();

router.use('/apiUsers', apiUsers)


export default router;