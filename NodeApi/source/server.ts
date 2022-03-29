import http from 'http';
import bodyParser from 'body-parser';
import express from 'express';
import logging from './config/logging';
import systemConfigs from './config/config';
import sampleRoutes from './routes/sample';
import retgistrationRoutes from './routes/registration';

const NAMESPACE = 'Server';
const router = express();

/** Log the request */
router.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});

/** Parse the body of the request */
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/** Rules of our API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

/** Routes go here */
router.use('/api/sample', sampleRoutes);
router.use('/api/registration', retgistrationRoutes);
/** Error handling */
router.use((req, res, next) => {
    next()
});

const httpServer = http.createServer(router);
httpServer.listen(systemConfigs.server.port, () => logging.info(NAMESPACE, `Server is running ${systemConfigs.server.hostname}:${systemConfigs.server.port}`));
