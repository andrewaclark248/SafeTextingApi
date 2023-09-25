import { Request, Response, NextFunction } from 'express';

export const ErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {

return res
    .status(400)
    .send({ errors: [{ message: 'Something went wrong' }] });
};