import { PickType } from '@nestjs/swagger';
import { BaseCreateUserDto } from 'src/user/dtos/base-create-user.dto';

export class updatePasswordDto extends PickType(BaseCreateUserDto, [
  'password'
] as const) {}
