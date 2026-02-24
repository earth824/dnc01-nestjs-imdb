import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'src/database/generated/prisma/client';
import bcrypt from 'bcrypt';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const main = async () => {
  await prisma.user.createMany({
    data: [
      {
        email: 'super@gmail.com',
        password: await bcrypt.hash('123456', 12),
        role: 'SUPER_ADMIN'
      },
      {
        email: 'zuper@gmail.com',
        password: await bcrypt.hash('123456', 12),
        role: 'SUPER_ADMIN'
      }
    ]
  });
};

main().catch((error) => console.log(error));
