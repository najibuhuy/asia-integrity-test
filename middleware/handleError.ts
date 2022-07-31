import { NextFunction, Response, Request } from "express";
import HttpException from "../utils/HttpException";
import { resError } from "../constant/response";

export const handleSendError = (req: Request, res: Response, next: NextFunction) => {
  const error = new HttpException(404, "Not Found");
  next(error);
};

export const handleErrorGlobal = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  if (typeof error.code == 'number') {
    const dataError = {
      code: error.code || 500,
      message: error.message || "Internal Server Error",
      data: error.data
    }
    resError({ code: dataError.code, message: dataError.message, data: dataError.data }, res);
    res.end();
  } else {
    if (error.code == "ECONNABORTED") {
      resError({ code: 504, message: error.message }, res)
    } else {
      resError({ code: 500, message: error.message, data: error.data }, res)
    }
  }
};
