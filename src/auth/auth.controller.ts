import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { RegisterDto } from 'src/auth/dtos/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<string> {
    await this.authService.register(registerDto);
    return 'registered successfully';
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  login() {}

  @Get('me')
  getMe() {}

  @Patch('me/password')
  updatePassword() {}
}
