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
import { PriceQueryDto } from './dtos/create-product.dto';
import { ProductService } from './product.service';
import type { Product } from './product.service';

@Controller('api')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post('AddProducts')
  addProduct(
    @Body()
    productdata: CreateProductDto,
  ): { message: string; data: Product; allData: Product[] } {
    return this.productService.createProduct(productdata);
  }

  @Get('products')
  getALLProducts(@Query() query: PriceQueryDto): Product[] {
    return this.productService.getProducts(query);
  }

  @Get('products/:id')
  getProductById(@Param('id', ParseIntPipe) id: number): Product {
    return this.productService.getProductById(id);
  }
}
