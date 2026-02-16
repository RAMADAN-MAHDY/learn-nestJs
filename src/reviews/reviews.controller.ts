import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ReviewsService } from './reviws.service';

@Controller()
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  // Get all reviews
  @Get('/api/reviews')
  getAllReviews() {
    return this.reviewsService.getAll();
  }

  // Get reviews by user ID along with user details
  @Get('/api/reviews/user/:userId')
  getReviewsByUser(@Param('userId', ParseIntPipe) userId: number) {
    const review = this.reviewsService.getReviewsByUser(userId);

    // const user = this.userService.getUserById(userId);

    return {
      //   user,
      reviews: review,
    };
  }
}
