import { Injectable } from '@nestjs/common';
import { Movie } from 'src/database/generated/prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateMovieDto } from 'src/movie/dtos/create-movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly prisma: PrismaService) {}

  create(createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.prisma.movie.create({ data: createMovieDto });
  }
}
