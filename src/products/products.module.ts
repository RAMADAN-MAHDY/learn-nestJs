import { Module } from '@nestjs/common';
import { ProductsController } from './product.controller';
import { ProductService } from './product.service';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/product.entity';
=======
>>>>>>> 9da7de10b4354261d218503e971d0e0bdf0e4e92

@Module({
  controllers: [ProductsController],
  providers: [ProductService],
<<<<<<< HEAD
  imports: [TypeOrmModule.forFeature([Product])],
  //   exports: [Product],
=======
>>>>>>> 9da7de10b4354261d218503e971d0e0bdf0e4e92
})
export class ProductsModule {}
