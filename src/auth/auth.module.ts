import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { HashModule } from 'src/share/hash/hash.module';

@Module({
  imports: [UserModule, HashModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
