import mongoose from "mongoose";
import db from '../index.js';

const createUsersSchema = (schema) => {
    const usersSchema = new mongoose.Schema(schema);
    const Users = db.model('Users', usersSchema);
    return Users;
}



export default createUsersSchema;