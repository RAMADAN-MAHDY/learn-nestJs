import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Controller('api/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('AddCategory')
  addCategory(@Body() dto: CreateCategoryDto) {
    return this.categoryService.createcategory({ name: dto.name });
  }

  @Get('GetAllCategories')
  getAllCategories() {
    return this.categoryService.getAllCategories();
  }
}
