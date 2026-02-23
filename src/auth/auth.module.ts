import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';
import { UserModule } from 'src/user/user.module';
import { HashModule } from 'src/share/hash/hash.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConfigOptions } from 'src/auth/config/jwt.config';
import { AuthTokenService } from './services/auth-token.service';

@Module({
  imports: [UserModule, HashModule, JwtModule.registerAsync(jwtConfigOptions)],
  controllers: [AuthController],
  providers: [AuthService, AuthTokenService]
})
export class AuthModule {}
