import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';

@Controller('api/users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    // private readonly registerDto: RegisterDto,
  ) {}

  @Post('auth/register')
  public register(@Body() body: RegisterDto) {
    return this.userService.register(body);
  }

  @Post('auth/login') // 201
  @HttpCode(HttpStatus.OK) // 200
  public login(@Body() body: LoginDto) {
    return this.userService.login(body);
  }
}
