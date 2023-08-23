import logger from "../../config/logger.js";
import catchAsync from "../../helpers/catchAsync.js";
import { handleResponse } from "../../helpers/responseHandler.js";

const getAllUsersApi = catchAsync(async (req,res) => {
    logger.info("Inside getAllUsersApi Controller");

    return handleResponse({
        res,
        data:null,
    })

});

export {getAllUsersApi}