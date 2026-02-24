import { Controller, Get, Post } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('movies/:id/reviews')
export class MovieReviewController {
  @Post()
  createReview() {}

  @Public()
  @Get()
  findReviewsByMovieId() {}
}
