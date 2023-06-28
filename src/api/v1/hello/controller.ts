import { NextFunction, Response, Request } from 'express';

const getHello = (request: Request, response: Response, next: NextFunction) => {
  const data: any = { message: 'Hello' };
  response.status(200);
  response.send(data);
};

export { getHello };
