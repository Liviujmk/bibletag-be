import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { NextFunction, Request, Response } from 'express';
import { configOptions } from './app.config.options';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: `.env` });
export const corsOptions: CorsOptions = {
  origin: configOptions.CORS_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Methods',
  ],
};

export const allowMultipleOrigins = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const allowedOrigins = configOptions.CORS_ORIGIN;
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  next();
};
