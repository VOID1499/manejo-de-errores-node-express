import type { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/index.js";


export const handleError = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      error: err.message,
      data: null
    });
  }

  console.error(err); // debug

  //Error desconocido o no controlado
  return res.status(500).json({
    error: "Internal server error",
    data: null
  });
};