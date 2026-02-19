import { Controller, Post, Get, Patch, Delete, Body } from '@nestjs/common';
import { CreateMovieDto } from 'src/movie/dtos/create-movie.dto';
import { UpdateMovieDto } from 'src/movie/dtos/update-movie.dto';

@Controller('movies')
export class MovieController {
  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto) {}

  @Get()
  findMovies() {}

  @Get(':id')
  findMovieById() {}

  @Patch(':id')
  updateMovie(@Body() updateMovieDto: UpdateMovieDto) {}

  @Patch(':id/poster')
  uploadPoster() {}

  @Delete(':id')
  deleteMovie() {}
}
