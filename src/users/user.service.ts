import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterDto } from './dtos/register.dto';
import { LoginDto } from './dtos/login.dto';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  /**
   * Register a new user
   * @param registerDto - Data Transfer Object containing user registration details
   * @returns The newly created user
   */
  public async register(registerDto: RegisterDto) {
    const { name, email, password } = registerDto;
    const userFromDto = await this.userRepository.findOne({ where: { email } });
    if (userFromDto) {
      throw new BadRequestException('User with this email already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let newUser = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    newUser = await this.userRepository.save(newUser);
    return newUser;
  }

  /**
   * log in user
   * @param loginDto data for log in to user account
   * @returns Jwt (access token)
   */

  public async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) throw new BadRequestException('invalid email or password');

    const IspasswordMatch = await bcrypt.compare(password, user.password);
    if (!IspasswordMatch)
      throw new BadRequestException('invalid email or password');

    return user;
  }
}