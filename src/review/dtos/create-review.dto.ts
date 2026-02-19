import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min
} from 'class-validator';
import { Trim } from 'src/common/decorators/trim.decorator';

export class CreateReviewDto {
  @Max(10)
  @Min(1)
  @IsInt()
  @Type(() => Number)
  rate: number;

  @Trim()
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  message?: string;
}
