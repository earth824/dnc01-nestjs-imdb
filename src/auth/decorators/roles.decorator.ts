import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/database/generated/prisma/enums';

export const ROLES = Symbol('Roles');

export const Roles = (...roles: Role[]) => SetMetadata(ROLES, roles);
