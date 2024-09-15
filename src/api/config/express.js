import '../middlewares/error.js';
import express from 'express';
import morgan from 'morgan';
import compress from 'compression';
import methodOverride from 'method-override';
import cors from 'cors';
import helmet from 'helmet';
import passport from 'passport';
import routes from '../routes/index.route.js';
import { logs } from './vars.js';
import error from '../middlewares/error.js';
import { jwt } from './passport.js';

const app = express();

// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attach them to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it.
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// enable authentication
app.use(passport.initialize());
passport.use('jwt', jwt);

// mount all routes on /api path
app.use('/api', routes);


// error logger
app.use(error.errorLogger);
// error converter
app.use(error.errorConverter);
// error handler
app.use(error.errorHandler);
// error 404
app.use(error.errorNotFound);

export default app;