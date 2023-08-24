import logger from "../../config/logger.js";
import catchAsync from "../../helpers/catchAsync.js";
import { generateApiJWT } from "../../helpers/jwtService.js";
import { handleError, handleResponse } from "../../helpers/responseHandler.js";
import { createUser } from "./usersService.js";

const getAllUsersApi = catchAsync(async (req,res) => {
    logger.info("Inside getAllUsersApi Controller");
    

    return handleResponse({
        res,
        data:null,
    })

});

const createUserApi = catchAsync(async (req,res) => {
    logger.info("Inside createUserApi Controller");
    const {name,email,username,password,role} = req.body;
    
    const result = await createUser(name,email,username,password,role);
    if(result.status === 'SUCCESS') {
        return handleResponse({
            res,
            data:result.user,
        })
    }
    return handleError({
        res,
        statusCode: 500,
        err: result.error,
    });

   

});

export {getAllUsersApi,createUserApi}