import { Controller, Get, Post } from '@nestjs/common';

@Controller('movies/:id/reviews')
export class MovieReviewController {
  @Post()
  createReview() {}

  @Get()
  findReviewsByMovieId() {}
}
