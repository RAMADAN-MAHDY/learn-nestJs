import { Module } from '@nestjs/common';
import { ProductsController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';

@Module({
  controllers: [ProductsController],
  providers: [ProductService],
  imports: [TypeOrmModule.forFeature([Product])],
  //   exports: [Product],
})
export class ProductsModule {}
