import { Injectable } from '@nestjs/common';
import { Category } from './entity/Category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dtos/create-category.dto';
@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  public async createcategory(categoeyDaata: CreateCategoryDto) {
    const newCategory = this.categoryRepository.create(categoeyDaata);
    return await this.categoryRepository.save(newCategory);
  }

  public async getAllCategories(): Promise<CreateCategoryDto[]> {
    return await this.categoryRepository.find();
  }
}
