import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
} from 'class-validator';

export class LoginDto {
  @IsEmail()
  @MaxLength(100)
  @IsNotEmpty()
  email: string;

  @Length(6, 12)
  @IsString()
  password: string;
}
