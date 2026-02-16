import { Injectable } from '@nestjs/common';
// import { UserService } from 'src/users/user.service';

@Injectable()
export class ReviewsService {
  //   constructor(private readonly userSerice: UserService) {}
  private reviews = [
    { id: 1, userId: 1, productId: 1, content: 'Great product!' },
    { id: 2, userId: 1, productId: 2, content: 'Not bad.' },
    { id: 3, userId: 2, productId: 1, content: 'Would buy again.' },
  ];

  getAll() {
    return this.reviews;
  }

  getReviewsByUser(userId: number) {
    return this.reviews.filter((review) => review.userId === userId);
  }

  addReview(userId: number, productId: number, content: string) {
    // Check if the user already reviewed this product
    const exists = this.reviews.some(
      (review) => review.userId === userId && review.productId === productId,
    );
    if (exists) {
      throw new Error(
        'You have already reviewed this product. You can only edit your review.',
      );
    }
    const newReview = {
      id: this.reviews.length + 1,
      userId,
      productId,
      content,
    };
    this.reviews.push(newReview);
    return newReview;
  }

  updateReview(userId: number, productId: number, content: string) {
    const review = this.reviews.find(
      (r) => r.userId === userId && r.productId === productId,
    );
    if (!review) {
      throw new Error('No review found for this product by this user.');
    }
    review.content = content;
    return review;
  }
}
