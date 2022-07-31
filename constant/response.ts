import { Response } from "express";

interface ResponseDto {
  code?: number;
  message?: string;
  data?: any;
}

export const resSuccess = (data: ResponseDto, res: Response) => {
  const newData = {
    statusCode: data.code ? data.code : 200,
    message: data.message ? data.message : "SUCCESS",
    success: true,
    data: data.data ? data.data : undefined,
  };

  res.status(newData.statusCode).json(newData);
  res.end();
};

export const resError = (data: ResponseDto, res: Response) => {
  const newData = {
    statusCode: data.code ? data.code : 500,
    message: data.message ? data.message : "ERROR",
    success: false,
    data: data.data ? data.data : undefined,
  };

  res.status(newData.statusCode).json(newData);
  res.end();
};

export const resDuplicate = (data: ResponseDto, res: Response) => {
  const newData = {
    statusCode: data.code ? data.code : 400,
    message: data.message ? data.message : "DUPLICATE",
    success: false,
    data: data.data ? data.data : undefined,
  };

  res.status(newData.statusCode).json(newData);
  res.end();
};

export const resNotExist = (data: ResponseDto, res: Response) => {
  const newData = {
    statusCode: data.code ? data.code : 404,
    message: data.message ? data.message : "NOT EXIST",
    success: false,
  };

  res.status(newData.statusCode).json(newData);
  res.end();
};

