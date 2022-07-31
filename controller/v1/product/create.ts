import { Request, Response, NextFunction } from 'express';
import { resSuccess, resDuplicate } from '../../../constant';
import { ProductDto } from '../../../dto'
import { HttpException } from '../../../utils';
import { createProduct  } from '../../../services/Product';

export default class ProductCreate {

    static async create(req: Request, res: Response, next: NextFunction) {
        try {
            const body: ProductDto = req.body;   
            let createProducts = await createProduct(body);
            if (createProducts){
                resSuccess({data: createProducts,message: "Success create Product." }, res)
            }  
                
            
        } catch (err :any) {
            console.log(err)
            const msg = err.errors.map((e: { message: any; }) => e.message);
            next(new HttpException(500, msg))
        }
    }
}