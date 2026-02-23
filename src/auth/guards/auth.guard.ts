import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable
} from '@nestjs/common';
import { Request } from 'express';
import { AuthTokenService } from 'src/auth/services/auth-token.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authTokenService: AuthTokenService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const [bearer, token] = request.headers.authorization?.split(' ') ?? [];
    if (bearer !== 'Bearer' || !token)
      throw new BadRequestException('Invalid authorization header');

    const payload = await this.authTokenService.verify(token);

    return true;
  }
}
