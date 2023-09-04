import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

// can be done by 2 mthods class with injectable decoratro and ordinary functin middleware like in express

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('logger class middleware');
    next();
  }
}

export const loggerFunctionMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('logger function middleware');
  next();
};
