import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post
} from '@nestjs/common';
import { RegisterDto } from 'src/auth/dtos/register.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    console.log(registerDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login() {}

  @Get('me')
  getMe() {}

  @Patch('me/password')
  updatePassword() {}
}
