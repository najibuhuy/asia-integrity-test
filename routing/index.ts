import express from "express";

import {version} from '../constant/version';
import routesV1 from "./v1";

const app = express.Router();

app.use(version.v1, routesV1);

export default app;
