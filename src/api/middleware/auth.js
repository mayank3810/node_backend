import { verifyJWT } from "../helpers/jwtService.js";
import { unAuthorized } from "../helpers/responseHandler.js";

const checkSignature = async (req, res, next) => {

    let token = req.header('Authorization') || req.header('authorization');
    if (!token) {
        return unAuthorized(res)
    };

    token = req.headers.authorization.replace('Bearer ', '');
    const payload = await verifyJWT({ token });
    req.user = payload;

    if (!req.user) {
        return unAuthorized(res)
    }

    return next();
};

export { checkSignature};