import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';
import { ReviewModule } from './review/review.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    MovieModule,
    ReviewModule,
    DatabaseModule,
    ConfigModule
  ]
})
export class AppModule {}
