import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { JwtPayload } from 'src/auth/types/jwt-payload.type';

export const CurrentUser = createParamDecorator(
  (data: keyof JwtPayload, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const user = request.user;
    if (!user) throw new Error('Current cannot used witout authentication');

    return data ? user[data] : user;
  }
);
