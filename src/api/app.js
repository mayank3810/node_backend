import express from 'express';
import globalErrorHandler from './helpers/globalErrorHandler.js';
import logger from './config/logger.js';
import { handleError } from './helpers/responseHandler.js';

const app = express();

// const limiter = rateLimit({
//     max: 999999999,
//     windowMs: 60 * 60 * 1000,
//     message: 'Too many requests from this IP, please try again in an hour!',
// });

// app.use('/api', limiter);
app.all('*', (req, res, next) => {
    next(
        handleError({
            res,
            statusCode: 404,
            err: `Can't find ${req.originalUrl} on this server!`,
        }),
    )
})

app.use(globalErrorHandler);

app.listen(3001,()=>{
    logger.info(`Listening on ${3001}`)
})

export default app