import { Request, Response, NextFunction } from 'express';
import { resSuccess, resDuplicate } from '../../../constant';
import { ProductDto, ProductParamsDto } from '../../../dto'
import { HttpException } from '../../../utils';
import bcrypt from 'bcrypt';
import { createProduct, readProduct, updateProduct } from '../../../services/Product';

export default class ProductUpdate{

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const body: ProductDto = req.body;   
            const params: ProductParamsDto = {id: req.params.id};   
            let updateProd = await updateProduct(body,params);
            resSuccess({data: updateProd,message: "Success update Product." }, res)
        } catch (err :any) {
            const msg = err.errors.map((e: { message: any; }) => e.message);
            next(new HttpException(500, msg))
        }
    }
}