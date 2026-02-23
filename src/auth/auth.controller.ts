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
import { LoginDto } from 'src/auth/dtos/login.dto';
import { RegisterDto } from 'src/auth/dtos/register.dto';
import { LoginResponse } from 'src/auth/types/response.type';

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
  login(@Body() loginDto: LoginDto): Promise<LoginResponse> {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @Get('me')
  getMe() {}

  @Patch('me/password')
  updatePassword() {}
}
