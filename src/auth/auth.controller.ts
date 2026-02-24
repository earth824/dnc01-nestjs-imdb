import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  SerializeOptions,
  UseInterceptors
} from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth.service';
import { LoginDto } from 'src/auth/dtos/login.dto';
import { RegisterDto } from 'src/auth/dtos/register.dto';
import { LoginResponse } from 'src/auth/types/response.type';
import { Public } from 'src/auth/decorators/public.decorator';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from 'src/database/generated/prisma/client';
import { UserResponseDto } from 'src/user/dtos/user-response.dto';
import { LoginResponseDto } from 'src/auth/dtos/login-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<string> {
    await this.authService.register(registerDto);
    return 'registered successfully';
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: LoginResponseDto, excludeExtraneousValues: true })
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() loginDto: LoginDto): Promise<LoginResponse> {
    return this.authService.login(loginDto.email, loginDto.password);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: UserResponseDto, excludeExtraneousValues: true })
  @Get('me')
  getMe(@CurrentUser('sub') id: number): Promise<User> {
    return this.authService.getMe(id);
  }

  @Patch('me/password')
  updatePassword() {}
}
