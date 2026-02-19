import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateReviewDto } from 'src/review/dtos/create-review.dto';

export class UpdateReviewDto extends PartialType(
  OmitType(CreateReviewDto, ['rate'] as const)
) {}
