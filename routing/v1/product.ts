import express from "express";
import { ProductCreate, ProductRead, ProductUpdate, ProductDelete} from "../../controller";
import {Product as ProductValidate} from "../../middleware";

const app = express.Router();
app.post('/create', ProductValidate.CreateProduct, ProductCreate.create);
app.get('/read/:id', ProductValidate.detailProduct, ProductRead.readById);
app.put('/update/:id', ProductValidate.UpdateProduct, ProductUpdate.update);
app.delete('/delete/:id', ProductValidate.detailProduct, ProductDelete.delete);




export default app;
