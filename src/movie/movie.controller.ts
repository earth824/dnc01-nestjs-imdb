import { Controller, Post, Get, Patch, Delete } from '@nestjs/common';

@Controller('movies')
export class MovieController {
  @Post()
  createMovie() {}

  @Get()
  findMovies() {}

  @Get(':id')
  findMovieById() {}

  @Patch(':id')
  updateMovie() {}

  @Patch(':id/poster')
  uploadPoster() {}

  @Delete(':id')
  deleteMovie() {}
}
