import { Module } from '@nestjs/common';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviws.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entity/reviews.entity';

@Module({
  controllers: [ReviewsController],
  providers: [ReviewsService],
  imports: [TypeOrmModule.forFeature([Review])],
})
export class ReviewsModule {}
