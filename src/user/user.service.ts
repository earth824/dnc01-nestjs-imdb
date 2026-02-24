import { ConflictException, Injectable } from '@nestjs/common';
import { User } from 'src/database/generated/prisma/client';
import { PrismaClientKnownRequestError } from 'src/database/generated/prisma/internal/prismaNamespace';
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

    try {
      await this.prisma.user.create({
        data: { ...createUserDto, password: hashedPassword }
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      )
        throw new ConflictException('Email address already exists');

      throw error;
    }
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email, status: true } });
  }
}
