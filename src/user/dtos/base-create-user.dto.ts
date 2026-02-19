import { Type } from 'class-transformer';
import {
  IsAlphanumeric,
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxDate,
  MinLength
} from 'class-validator';
import { Trim } from 'src/common/decorators/trim.decorator';
import { Gender, Role } from 'src/database/generated/prisma/enums';

export class BaseCreateUserDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @MinLength(6)
  @IsAlphanumeric()
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEnum(Role)
  @IsNotEmpty()
  role: Role;

  @Trim()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @Trim()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @MaxDate(new Date())
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  dob: Date;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender: Gender;
}
