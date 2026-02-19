import { Module } from '@nestjs/common';
import { ReviewController } from './review.controller';
import { MovieReviewController } from './movie-review.controller';

@Module({
  controllers: [ReviewController, MovieReviewController]
})
export class ReviewModule {}
