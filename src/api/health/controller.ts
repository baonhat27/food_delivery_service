import { NextFunction, Response, Request } from 'express';

const checkHealth = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const data: any = { message: 'Service Up' };
  response.status(200);
  response.send(data);
};

export { checkHealth };
