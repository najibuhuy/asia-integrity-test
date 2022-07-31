import { Request, Response, NextFunction } from 'express';
import { resSuccess, resDuplicate } from '../../../constant';
import { ProductDto, ProductParamsDto } from '../../../dto'
import { HttpException } from '../../../utils';
import bcrypt from 'bcrypt';
import {  deleteProduct } from '../../../services/Product';


export default class ProductDelete{

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const params: ProductParamsDto = {id: req.params.id};   
            let deleteProd = await deleteProduct(params);
            if(deleteProd){
                await deleteProduct(params)
                resSuccess({data: deleteProd, message: "Success delete Product." }, res)
            }
        } catch (err :any) {
            const msg = err.errors.map((e: { message: any; }) => e.message);
            next(new HttpException(500, msg))
        }
    }
}