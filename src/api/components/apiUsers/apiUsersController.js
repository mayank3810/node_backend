import logger from "../../config/logger.js";
import catchAsync from "../../helpers/catchAsync.js";
import { handleResponse } from "../../helpers/responseHandler.js";

const getUserIp = catchAsync(async (req,res) => {
    logger.info("Inside getUserIp Controller");

    return handleResponse({
        res,
        data:req.ip,
    })

});

export {getUserIp}