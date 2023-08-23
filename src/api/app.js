import express from 'express';
import globalErrorHandler from './helpers/globalErrorHandler.js';
import logger from './config/logger.js';
import { handleError } from './helpers/responseHandler.js';
import router from './components/index.js';
import config from './config/config.js';
import {defaultLimiter , apiLimiter , createAccountLimiter} from './config/apiLimits.js'
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors';

const app = express();

let corsOptions = {
    origin: config.whitelistUrl
  }

app.set('trust proxy', config.numberOfProxies);
app.use(defaultLimiter);
app.use('/api', apiLimiter);
app.use('/api/users/createAccount', createAccountLimiter);
app.use(config.apiVersionUrl, router);
app.use(express.json({ limit: config.fileSizeLimit }));
app.use(express.urlencoded({ limit: config.fileSizeLimit, extended: false }));
app.use(mongoSanitize());
app.use(cors(corsOptions));

// find local ip to set numberOfProxy in config
app.get(config.apiVersionUrl, (req,res) => {
	logger.info('Api endpoint called');
    res.send({yourIp:req.ip})
});


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