import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { BcryptService } from 'src/share/hash/bcrypt.service';
import { CreateUserDto } from 'src/user/dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly bcryptService: BcryptService
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<void> {
    const hashedPassword = await this.bcryptService.hash(
      createUserDto.password
    );
    await this.prisma.user.create({
      data: { ...createUserDto, password: hashedPassword }
    });
  }
}
