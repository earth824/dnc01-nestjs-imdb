import { Controller, Patch, Post } from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('users')
export class UserController {
  @Roles('SUPER_ADMIN')
  @Post('admin')
  createAdmin() {}

  @Patch('me')
  updateProfile() {}

  @Roles('SUPER_ADMIN', 'ADMIN')
  @Patch(':id/disable')
  disableUser() {}

  @Roles('SUPER_ADMIN', 'ADMIN')
  @Patch(':id/enable')
  enableUser() {}
}
