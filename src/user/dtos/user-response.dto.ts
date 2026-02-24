import { Expose } from 'class-transformer';
import { Gender, Role } from 'src/database/generated/prisma/enums';

export class UserResponseDto {
  @Expose()
  email: string;

  @Expose()
  role: Role;

  @Expose()
  id: number;

  @Expose()
  firstName: string | null;

  @Expose()
  lastName: string | null;

  @Expose()
  dob: Date | null;

  @Expose()
  gender: Gender | null;
}
