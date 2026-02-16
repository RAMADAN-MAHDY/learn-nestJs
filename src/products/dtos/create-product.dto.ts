<<<<<<< HEAD
import { IsNumber, IsString, IsNotEmpty, Length, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty()
  @Length(3, 50, { message: 'Name must be between 3 and 50 characters' })
  title: string;

  @IsString({ message: 'Description must be a string' })
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0, { message: 'Price must be at least 0' })
  @Type(() => Number)
  price: number;

  @IsString({ message: 'CategoryId must be a number' })
  @IsNotEmpty()
  categoryId: number;
=======
import {
  IsNumber,
  IsString,
  IsNotEmpty,
  IsOptional,
  Length,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty()
  @Length(3, 50, { message: 'Name must be between 3 and 50 characters' })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0, { message: 'Price must be at least 0' })
  @Type(() => Number)
  price: number;
}

export class PriceQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  minPrice?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  maxPrice?: number;
>>>>>>> 9da7de10b4354261d218503e971d0e0bdf0e4e92
}
