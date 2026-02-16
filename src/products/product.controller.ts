import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto'; // Ensure this path and export are correct
<<<<<<< HEAD
import { PriceQueryDto } from './dtos/price-query.dto';
import { ProductService } from './product.service';
// import type { Product } from './product.service';
=======
import { PriceQueryDto } from './dtos/create-product.dto';
import { ProductService } from './product.service';
import type { Product } from './product.service';
>>>>>>> 9da7de10b4354261d218503e971d0e0bdf0e4e92

@Controller('api')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post('AddProducts')
  addProduct(
    @Body()
    productdata: CreateProductDto,
<<<<<<< HEAD
  ) {
=======
  ): { message: string; data: Product; allData: Product[] } {
>>>>>>> 9da7de10b4354261d218503e971d0e0bdf0e4e92
    return this.productService.createProduct(productdata);
  }

  @Get('products')
<<<<<<< HEAD
  getALLProducts(@Query() query: PriceQueryDto) {
=======
  getALLProducts(@Query() query: PriceQueryDto): Product[] {
>>>>>>> 9da7de10b4354261d218503e971d0e0bdf0e4e92
    return this.productService.getProducts(query);
  }

  @Get('products/:id')
<<<<<<< HEAD
  getProductById(@Param('id', ParseIntPipe) id: number) {
=======
  getProductById(@Param('id', ParseIntPipe) id: number): Product {
>>>>>>> 9da7de10b4354261d218503e971d0e0bdf0e4e92
    return this.productService.getProductById(id);
  }
}
