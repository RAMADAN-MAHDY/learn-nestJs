import { Controller, Get } from '@nestjs/common';
@Controller()
export class ReviewsController {
  @Get('/api/reviews')
  getAllReviews() {
    return [
      { id: 1, productId: 1, content: 'Great product!' },
      { id: 2, productId: 2, content: 'Not bad.' },
      { id: 3, productId: 1, content: 'Would buy again.' },
    ];
  }
}
