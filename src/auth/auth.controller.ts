import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('register')
  register() {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login() {}

  @Get('me')
  getMe() {}

  @Patch('me/password')
  updatePassword() {}
}
