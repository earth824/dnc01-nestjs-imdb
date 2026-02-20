import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dtos/register.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(registerDto: RegisterDto): Promise<void> {
    await this.userService.createUser({ ...registerDto, role: 'USER' });
  }
}
