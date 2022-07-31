import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';
import HttpException from '../../utils/HttpException';

export default class Product {
    static async CreateProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = yup.object().shape({
                name: yup.string().required(),
                storeId: yup.number().required(),
                imageDefault: yup.string().required(),
                size: yup.string(),
                variant: yup.string(),
                description: yup.string(),
                price: yup.number().required(),
                priceDiscount: yup.number(),
                isPromo: yup.boolean(),
                stock: yup.number().required()  
            })
            const valid = await schema.validate(req.body);
            req.body = valid;
            if(req.body.userId) next();
            else  throw new HttpException(401, "Invalid Type Token")

        } catch (e: any) {
            e.code = 403;
            next(e);
        }
    }

    static async UpdateProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = yup.object().shape({
                name: yup.string(),
                image: yup.string(),
                size: yup.string(),
                variant: yup.string(),
                description: yup.string(),
                price: yup.number(),
                priceDiscount: yup.number(),
                isPromo: yup.boolean(),
                stock: yup.number() 
            })
            const valid = await schema.validate(req.body);
            req.body = valid;
            
            if(req.body.userId) next();
            else  throw new HttpException(401, "Invalid Type Token")

        } catch (e: any) {
            e.code = 403;
            next(e);
        }
    }

    static async detailProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const schema = yup.object().shape({
                id: yup.string().required(),
            })
            const valid = await schema.validate({id: req.params.id});
            req.params = valid;
            console.log(req.headers)
            if(req.headers.authorization) next();
            else  throw new HttpException(401, "Invalid Type Token")

        } catch (e: any) {
            e.code = 403;
            next(e);
        }
    }
}