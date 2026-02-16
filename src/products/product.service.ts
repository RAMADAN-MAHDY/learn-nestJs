import { Injectable, NotFoundException } from '@nestjs/common';
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
}
