import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { ROLES } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/database/generated/prisma/enums';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndOverride<Role[] | undefined>(ROLES, [
      context.getHandler(),
      context.getClass()
    ]);
    if (!roles) return true;

    const request = context.switchToHttp().getRequest<Request>();
    const userRole = request.user?.role;
    if (!userRole) throw new Error('Role cannot used without authentication');

    if (!roles.includes(userRole))
      throw new ForbiddenException(
        'Insufficient permission to perform this action'
      );

    return true;
  }
}
