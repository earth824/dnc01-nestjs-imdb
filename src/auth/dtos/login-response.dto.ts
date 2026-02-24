import { Expose, Type } from 'class-transformer';
import { UserResponseDto } from 'src/user/dtos/user-response.dto';

export class LoginResponseDto {
  @Expose()
  accessToken: string;

  @Expose()
  @Type(() => UserResponseDto)
  user: UserResponseDto;
}
