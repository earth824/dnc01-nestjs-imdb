import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString
} from 'class-validator';
import { Trim } from 'src/common/decorators/trim.decorator';
import { ContentRating, Genre } from 'src/database/generated/prisma/enums';

export class CreateMovieDto {
  @Trim()
  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title is required' })
  title: string;

  @IsPositive()
  @IsInt()
  @Type(() => Number)
  @IsOptional()
  releaseYear?: number;

  @IsEnum(ContentRating)
  @IsOptional()
  contentRating?: ContentRating;

  @IsPositive()
  @IsInt()
  @Type(() => Number)
  @IsOptional()
  length?: number;

  @IsEnum(Genre, { each: true })
  @IsArray()
  @IsOptional()
  genres?: Genre[];

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  outline?: string;
}
