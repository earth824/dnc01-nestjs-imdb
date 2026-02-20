import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { HashModule } from 'src/share/hash/hash.module';

@Module({
  imports: [HashModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
