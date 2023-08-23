import logger from "../../config/logger.js";
import catchAsync from "../../helpers/catchAsync.js";
import { generateApiJWT } from "../../helpers/jwtService.js";
import { handleResponse } from "../../helpers/responseHandler.js";

const getAllUsersApi = catchAsync(async (req,res) => {
    logger.info("Inside getAllUsersApi Controller");

    return handleResponse({
        res,
        data:null,
    })

});

export {getAllUsersApi}