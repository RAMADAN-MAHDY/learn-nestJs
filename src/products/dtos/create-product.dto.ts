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
}
