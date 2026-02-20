import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'src/database/generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaPg({
      connectionString:
        'postgresql://postgres:123456@localhost:5432/dnc01_nestjs_imdb'
    });

    super({ adapter });
  }
}
