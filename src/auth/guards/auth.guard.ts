import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JsonWebTokenError, TokenExpiredError } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from 'src/auth/decorators/public.decorator';
import { AuthTokenService } from 'src/auth/services/auth-token.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authTokenService: AuthTokenService,
    private readonly reflector: Reflector
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean | undefined>(
      IS_PUBLIC_KEY,
      [context.getHandler(), context.getClass()]
    );
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest<Request>();

    const [bearer, token] = request.headers.authorization?.split(' ') ?? [];
    if (bearer !== 'Bearer' || !token)
      throw new BadRequestException('Invalid authorization header');

    try {
      const payload = await this.authTokenService.verify(token);
      request.user = payload;
    } catch (error) {
      if (error instanceof JsonWebTokenError)
        throw new UnauthorizedException('Invalid token');
      if (error instanceof TokenExpiredError)
        throw new UnauthorizedException('Tokan has expired');
      throw error;
    }

    return true;
  }
}
