import { Controller, Patch } from '@nestjs/common';

@Controller('reviews')
export class ReviewController {
  @Patch(':id')
  UpdateReview() {}

  @Patch(':id/disable')
  disableReview() {}
}
