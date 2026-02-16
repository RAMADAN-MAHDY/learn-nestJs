import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateCategoryDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty()
  @Length(3, 50, { message: 'Name must be between 3 and 50 characters' })
  name: string;
}
