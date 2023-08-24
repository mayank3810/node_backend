// const registerUser = async () => {
//     const payload = { email: 'mayank@distinctcloud.io', role: 'admin' };
//     let token = await generateApiJWT({ payload });
// }

import { create, findOne } from "../../../database/helpers/index.js";
import logger from "../../config/logger.js";
import message from "../../config/message.js";
import { hashPassword } from "../../helpers/passwordService.js";
import Users from "./usersModel.js";

const createUser = async (name, email, username, password, role) => {
    logger.info('Inside createUser Service');

    const foundUser = await findOne(Users, { email });
    if (foundUser) {
        return {
            status: 'ERROR',
            error:  message.USER_ALREADY_EXIST,
        };
    }
    //to do validation

    const hashedPassword = hashPassword(password)

    const user = await create(Users,{name,email,username,hashedPassword,role});

    return {
        status:'SUCCESS',
        user
    }

}

export {createUser}