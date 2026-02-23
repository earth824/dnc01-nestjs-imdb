import { Global, Module } from '@nestjs/common';
import { TypedConfigService } from './typed-config.service';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { validate } from 'src/config/env.validation';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      validate
    })
  ],
  providers: [TypedConfigService],
  exports: [TypedConfigService]
})
export class ConfigModule {}
