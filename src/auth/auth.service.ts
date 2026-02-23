import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dtos/register.dto';
import { LoginResponse } from 'src/auth/types/response.type';
import { BcryptService } from 'src/share/hash/bcrypt.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly bcryptService: BcryptService
  ) {}

  async register(registerDto: RegisterDto): Promise<void> {
    await this.userService.createUser({ ...registerDto, role: 'USER' });
  }

  async login(email: string, password: string): Promise<LoginResponse> {
    const user = await this.userService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isMatch = await this.bcryptService.compare(password, user.password);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    // sign jwt
    // return jwt and user
    return { accessToken: '', user };
  }
}
