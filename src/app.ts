import './config';
import { join } from 'path';
import express from 'express';
import morgan from 'morgan';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import session from 'express-session';
import helmet from 'helmet';
import router from './router';
import 'reflect-metadata';
import passport from './passport';

const app = express();

/**
 * set static folder
 * The files in 'public' folder can be accessed from any users.
 * Example: GET '/public/example.txt'
 */
app.use('/public', express.static(join(__dirname, '../public')));

/**
 * log request
 */
app.use(morgan('combined'));

/**
 * parse request to req.body include application/json and application/x-www-form-urlencoded
 */
app.use(json());
app.use(urlencoded({ extended: true }));

/**
 * allow cross origin
 */
app.use(cors());

/**
 * add req.session
 */
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 1000000000 },
  }),
);

/**
 *  use passportjs to authenticate user
 */
app.use(passport.initialize());
app.use(passport.session());

/**
 * secure application with many solutions
 * see https://www.npmjs.com/package/helmet
 */
app.use(helmet());

/**
 * integrate express router
 */
app.use(router);

export default app;
