export class createProductDto {
  name: string;
  price: number;
}

export class PriceQueryDto {
  minPrice?: number;
  maxPrice?: number;
}
