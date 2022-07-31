import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import HttpException from '../utils/HttpException';

const { jwtSecret, tokenDefault } = require('./../config').config;

interface TokenJwt {
    id: number
    iat: number
}

const authorization = async (req: Request, res: Response, next: NextFunction) => {
    const authToken = req.headers.authorization
    try {
        if (authToken) {
            const token: string[] = authToken.split(" ");
            if (token[0] === "Basic") {
                if (tokenDefault == token[1]) {
                    next()
                } else {
                    throw new HttpException(401, "Token Unauthorized")
                }
            } 
            // else if (token[0] === 'Bearer') {
            //     const result = jwt.verify(token[1], jwtSecret) as TokenJwt;
            //     req.body.userId = result.id;
            //     next()
            // } 
            else {
                throw new HttpException(401, "Invalid Type Token")
            }
        } else {
            throw new HttpException(401, "Invalid Token")
        }

    } catch (e: any) {
        e.code = 401
        next(e)
    }
}

export default authorization;