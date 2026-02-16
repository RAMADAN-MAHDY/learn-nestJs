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
import { PriceQueryDto } from './dtos/price-query.dto';
import { ProductService } from './product.service';
// import type { Product } from './product.service';

@Controller('api')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post('AddProducts')
  addProduct(
    @Body()
    productdata: CreateProductDto,
  ) {
    return this.productService.createProduct(productdata);
  }

  @Get('products')
  getALLProducts(@Query() query: PriceQueryDto) {
    return this.productService.getProducts(query);
  }

  @Get('products/:id')
  getProductById(@Param('id', ParseIntPipe) id: number) {
    return this.productService.getProductById(id);
  }
}
