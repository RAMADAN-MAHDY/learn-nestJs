import { IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class PriceQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  minPrice?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  maxPrice?: number;
}
