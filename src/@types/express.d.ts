import 'express';
import { JwtPayload } from 'src/auth/types/jwt-payload.type';

declare module 'express' {
  interface Request {
    user?: JwtPayload;
  }
}
