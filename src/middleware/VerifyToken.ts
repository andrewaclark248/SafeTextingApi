import auth from "../config/firebaseConfig"
import { Request, Response, NextFunction} from 'express';

export interface IUserData {
  email?: string | undefined;
}

export interface IRequestUser {
  user: IUserData;
}

export type IAuthRequest = IRequestUser & {
  headers: { authorization: string };
};



export const VerifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req?.headers?.authorization?.split(" ")[1];

  try {
    const decodeValue = await auth.verifyIdToken(token!);
    if (decodeValue) {
      req.user = decodeValue;
      return next();
    }
  } catch (e) {
    return res.status(401).json({message: "Internal Error"})
  }

  return res
  .status(400)
  .send({ errors: [{ message: 'Something went wrong' }] });
}; 