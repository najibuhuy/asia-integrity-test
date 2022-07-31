
"use strict";

import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import Express from "express";
import morgan from 'morgan';
import bodyParser from 'body-parser';

import { handleErrorGlobal } from './middleware/handleError';
import { handleSendError } from "./middleware/handleError";
import routing from './routing';

const server = () => {
    const app  = Express();    
    app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    app.use(Express.json());
    app.use(cors());
    app.use(morgan('[:date[clf]] :remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'));
    
    app.use(routing)
    app.use(handleSendError);
    app.use(handleErrorGlobal);

    return app;
}

module.exports = server;