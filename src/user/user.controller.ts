import { Controller, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post('admin')
  createAdmin() {}

  @Patch('me')
  updateProfile() {}

  @Patch(':id/disable')
  disableUser() {}

  @Patch(':id/enable')
  enableUser() {}
}
