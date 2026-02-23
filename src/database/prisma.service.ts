import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { TypedConfigService } from 'src/config/typed-config.service';
import { PrismaClient } from 'src/database/generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private readonly typedConfigService: TypedConfigService) {
    const adapter = new PrismaPg({
      connectionString: typedConfigService.get('DATABASE_URL')
      // connectionString: env.databaseUrl
    });

    super({ adapter });
  }
}
