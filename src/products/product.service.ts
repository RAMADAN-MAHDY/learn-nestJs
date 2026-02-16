import { Injectable, NotFoundException } from '@nestjs/common';
<<<<<<< HEAD
import { CreateProductDto } from './dtos/create-product.dto';
import { PriceQueryDto } from './dtos/price-query.dto';
import { Repository } from 'typeorm';
import { Product } from './entity/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/Category/entity/Category.entity';

@Injectable()
export class ProductService {
  // Injecting the Product repository
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Create a new product
  public async createProduct(productdata: CreateProductDto) {
    const categoryId = parseInt(String(productdata.categoryId));

    // لازم await عشان ترجع object مش Promise
    const category = await this.productRepository.manager
      .getRepository(Category)
      .exists({ where: { id: categoryId } });

    if (!category) {
      throw new NotFoundException(`Category with ID ${categoryId} not found`);
    }
    console.log('productdata', productdata);

    const newProduct = this.productRepository.create({
      ...productdata,
      categoryId, // هنا بنربط relation
    });

    console.log('newProduct', newProduct);

    return await this.productRepository.save(newProduct);
  }

  // Get all products with optional price filtering
  public async getProducts(query: PriceQueryDto) {
    const { minPrice, maxPrice } = query;

    const qb = this.productRepository.createQueryBuilder('product');

    if (minPrice !== undefined)
      qb.andWhere('product.price >= :minPrice', { minPrice });
    if (maxPrice !== undefined)
      qb.andWhere('product.price <= :maxPrice', { maxPrice });

    return qb.getMany();
  }

  // Get a product by ID
  public async getProductById(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (product === null || product === undefined) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  // Update a product by ID
  public async updateProduct(id: number, updateData: CreateProductDto) {
    const product = await this.getProductById(id);
    product.title = updateData.title ?? product.title;
    product.description = updateData.description ?? product.description;
    product.price = updateData.price ?? product.price;

    return this.productRepository.save(product);
  }

  // Delete a product by ID
  public async deleteProduct(id: number) {
    const product = await this.getProductById(id);
    return this.productRepository.remove(product);
  }
=======
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
>>>>>>> 9da7de10b4354261d218503e971d0e0bdf0e4e92
}
