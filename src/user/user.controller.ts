import { Body, Controller, Patch, Post } from '@nestjs/common';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { CreateAdminDto } from 'src/user/dtos/create-admin.dto';
import { UserService } from 'src/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Roles('SUPER_ADMIN')
  @Post('admin')
  async createAdmin(@Body() createAdminDto: CreateAdminDto): Promise<string> {
    await this.userService.createAdmin(createAdminDto);
    return 'Admin created successfully';
  }

  @Patch('me')
  updateProfile() {}

  @Roles('SUPER_ADMIN', 'ADMIN')
  @Patch(':id/disable')
  disableUser() {}

  @Roles('SUPER_ADMIN', 'ADMIN')
  @Patch(':id/enable')
  enableUser() {}
}
