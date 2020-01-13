import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  UsePipes,
  UseGuards,
  UnauthorizedException,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';
import { ValidationPipe } from '../pipe/validation.pipe';
import { AuthGuard } from '@nestjs/passport';
import * as bcrypt from 'bcryptjs';

@Controller('/api/v1/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  fetchAllUser(): Promise<User[]> {
    return this.userService.fetchAllUser();
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await this.hashPassword(createUserDto.password);
    const user = await this.userService.findOne(createUserDto.email);
    if (user)
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);

    return await this.userService.createUser(createUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  deleteUser(@Param('id') id): Promise<User> {
    return this.userService.deleteUser(id);
  }

  private async hashPassword(pass: string): Promise<string> {
    return await bcrypt.hashSync(pass, bcrypt.genSaltSync(10));
  }
}
