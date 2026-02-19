import { PartialType } from '@nestjs/swagger';
import { CreateMovieDto } from 'src/movie/dtos/create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
