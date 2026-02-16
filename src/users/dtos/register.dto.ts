import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class RegisterDto {
  @IsEmail()
  @MaxLength(100)
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(3, 30)
  name: string;

  @Length(6, 12)
  @IsString()
  password: string;
}
