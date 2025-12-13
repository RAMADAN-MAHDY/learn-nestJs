import { Module } from '@nestjs/common';
import { ProductsController } from './prodect.controller';

@Module({
  controllers: [ProductsController],
})
export class ProductsModule {}
