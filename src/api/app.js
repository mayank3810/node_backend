import express from 'express';
import globalErrorHandler from './helpers/globalErrorHandler.js';
import logger from './config/logger.js';
import { handleError } from './helpers/responseHandler.js';
import router from './components/index.js';
import config from './config/config.js'

const app = express();


app.use(config.apiVersionUrl, router);

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

app.listen(config.appPort,()=>{
    logger.info(`Listening on ${config.appPort}`)
})

export default app