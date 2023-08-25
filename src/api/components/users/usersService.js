// const registerUser = async () => {
//     const payload = { email: 'mayank@distinctcloud.io', role: 'admin' };
//     let token = await generateApiJWT({ payload });
// }

import { create, findOne } from "../../../database/helpers/index.js";
import logger from "../../config/logger.js";
import message from "../../config/message.js";
import { hashPassword } from "../../helpers/passwordService.js";
import { createUserValidation } from "../../validation/userValidation.js";
import Users from "./usersModel.js";

const createUser = async (name, email, username, password, role) => {
    logger.info('Inside createUser Service');
    const validatedPayload = createUserValidation.validate({ name, email, username, password, role });
    if(validatedPayload.error){
        return {
            status :'ERROR',
            error : validatedPayload.error
        }
    }
    try {
        const foundUser = await findOne(Users, { email });
        if (foundUser) {
            return {
                status: 'ERROR',
                error: message.USER_ALREADY_EXIST,
            };
        }
    } catch (error) {
        return {
            status: 'ERROR',
            error: message.SOMETHING_WENT_WRONG,
        };
    }

    //to do validation

    const hashedPasswordStr = hashPassword(password);


    const user = await create(Users, payload);
    delete user._doc.password

    return {
        status: 'SUCCESS',
        user
    }

}

export { createUser }