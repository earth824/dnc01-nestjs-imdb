import { IntersectionType, OmitType, PartialType } from '@nestjs/swagger';
import { BaseCreateUserDto } from 'src/user/dtos/base-create-user.dto';

export class CreateUserDto extends IntersectionType(
  BaseCreateUserDto,
  PartialType(
    OmitType(BaseCreateUserDto, ['email', 'password', 'role'] as const)
  )
) {}
