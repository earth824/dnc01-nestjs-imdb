import { Controller, Post, Get, Patch, Delete, Body } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Movie } from 'src/database/generated/prisma/client';
import { CreateMovieDto } from 'src/movie/dtos/create-movie.dto';
import { UpdateMovieDto } from 'src/movie/dtos/update-movie.dto';
import { MovieService } from 'src/movie/movie.service';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Roles('SUPER_ADMIN', 'ADMIN')
  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.movieService.create(createMovieDto);
  }

  @Public()
  @Get()
  findMovies() {}

  @Public()
  @Get(':id')
  findMovieById() {}

  @Patch(':id')
  updateMovie(@Body() updateMovieDto: UpdateMovieDto) {}

  @Patch(':id/poster')
  uploadPoster() {}

  @Delete(':id')
  deleteMovie() {}
}
