import express from "express";

import product from "./product";

import { authorization } from "../../middleware";

const routesV1 = express.Router();

routesV1.use(authorization);
routesV1.use("/product", product);


export default routesV1;