import { PickType } from '@nestjs/swagger';
import { BaseCreateUserDto } from 'src/user/dtos/base-create-user.dto';

export class CreateAdminDto extends PickType(BaseCreateUserDto, [
  'email',
  'password'
] as const) {}
