import { NextFunction, Request, Response } from 'express';

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  res.send('something went wrong, check the log');
};

export default errorHandler;
