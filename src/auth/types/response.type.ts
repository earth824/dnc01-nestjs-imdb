import { User } from 'src/database/generated/prisma/client';

export type LoginResponse = { accessToken: string; user: User };
