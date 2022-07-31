import { Request, Response, NextFunction } from 'express';
import { resSuccess, resDuplicate, resNotExist } from '../../../constant';
import { ProductIdDto, ProductParamsDto } from '../../../dto'
import { HttpException } from '../../../utils';
import { readProduct} from '../../../services/Product';

export default class ProductRead{

    static async readById(req: Request, res: Response, next: NextFunction) {
        try {
            const params: ProductParamsDto = {id: req.params.id}; 
            let paramFilter : ProductParamsDto = {
                id: params.id
            }  
            let getProductById = await readProduct(paramFilter) 
            if(getProductById){               
                resSuccess({data: getProductById,message: "Success get Product." }, res)
            } else resNotExist({message: "Produk tidak ditemukan" }, res)
            
        } catch (err :any) {
            console.log(err)
            const msg = err.errors.map((e: { message: any; }) => e.message);
            next(new HttpException(500, msg))
        }
    }
}