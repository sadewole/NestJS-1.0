import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService
  ) {}

  async fetchAllUser(): Promise<User[]> {
    return await this.userModel.find();
  }

  async createUser(user: object): Promise<any> {
    const newUser = new this.userModel(user);
    const data = await newUser.save();
    const payload = { sub: data._id };

    return {
      msg: 'Register successful',
      success: true,
      data,
      token: `Bearer ${this.jwtService.sign(payload)}`
    };
  }

  async findOne(email: string): Promise<User> {
    return await this.userModel.findOne({ email });
  }

  async findById(id: string): Promise<User> {
    return await this.userModel.findById({ _id: id });
  }

  async deleteUser(id: string): Promise<any> {
    await this.userModel.findOneAndRemove(id);
    return {
      success: true,
      message: 'User deleted successfully'
    };
  }
}
