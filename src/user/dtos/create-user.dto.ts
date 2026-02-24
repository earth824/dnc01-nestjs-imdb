import {
  IntersectionType,
  OmitType,
  PartialType,
  PickType
} from '@nestjs/swagger';
import { BaseCreateUserDto } from 'src/user/dtos/base-create-user.dto';

export class CreateUserDto extends IntersectionType(
  PickType(BaseCreateUserDto, ['email', 'password', 'role'] as const),
  PartialType(
    OmitType(BaseCreateUserDto, ['email', 'password', 'role'] as const)
  )
) {}
