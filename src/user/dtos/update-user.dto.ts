import { OmitType, PartialType } from '@nestjs/swagger';
import { BaseCreateUserDto } from 'src/user/dtos/base-create-user.dto';

export class UpdateUserDto extends PartialType(
  OmitType(BaseCreateUserDto, ['email', 'role', 'password'] as const)
) {}
