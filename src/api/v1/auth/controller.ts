import { NextFunction, Response, Request } from 'express';
import register from './service';

const registerController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const body = request.body;
  const data = await register(body);

  response.status(200);
  response.send(data);
};

export { registerController };
