import {
  IntersectionType,
  OmitType,
  PartialType,
  PickType
} from '@nestjs/swagger';
import { BaseCreateUserDto } from 'src/user/dtos/base-create-user.dto';

export class RegisterDto extends IntersectionType(
  OmitType(BaseCreateUserDto, ['role'] as const),
  PartialType(PickType(BaseCreateUserDto, ['dob', 'gender'] as const))
) {}
