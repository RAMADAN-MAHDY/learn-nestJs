import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { createProductDto } from './dtos/create-product.dto';
import { PriceQueryDto } from './dtos/create-product.dto';
interface Product {
  id: number;
  name: string;
  price: number;
}

@Controller()
export class ProductsController {
  private products: Product[] = [];

  @Post('/api/AddProducts')
  addProduct(@Body() productdata: createProductDto) {
    if (!productdata || !productdata.name || !productdata.price) {
      return { message: 'Invalid product data' };
    }
    const newProduct: Product = {
      id: this.products.length + 1,
      name: productdata.name,
      price: productdata.price,
    };
    this.products.push(newProduct);
    return {
      message: 'Product added successfully',
      data: productdata,
      allData: this.products,
    };
  }

  @Get('/api/products')
  getALLProducts(@Query() query: PriceQueryDto) {
    const { minPrice, maxPrice } = query;
    if (maxPrice && minPrice) {
      return this.products.filter(
        (prod) => prod.price <= maxPrice && prod.price >= minPrice,
      );
    }
    return this.products;
  }

  @Get('/api/products/:id')
  getProductById(@Param('id', ParseIntPipe) id: number) {
    const product = this.products.find((prod) => prod.id == id);
    return product;
  }
}
