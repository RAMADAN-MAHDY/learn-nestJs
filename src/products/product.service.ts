import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, PriceQueryDto } from './dtos/create-product.dto';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class ProductService {
  private products: Product[] = [];

  createProduct(productdata: CreateProductDto) {
    const newProduct: Product = {
      id: this.products.length + 1,
      name: productdata.name,
      price: Number(productdata.price),
    };
    this.products.push(newProduct);
    return {
      message: 'Product added successfully',
      data: newProduct,
      allData: this.products,
    };
  }

  getProducts(query: PriceQueryDto) {
    const { minPrice, maxPrice } = query;
    if (maxPrice && minPrice) {
      return this.products.filter(
        (prod) => prod.price <= maxPrice && prod.price >= minPrice,
      );
    }
    return this.products;
  }

  getProductById(id: number) {
    const product = this.products.find((prod) => prod.id === id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }
}
