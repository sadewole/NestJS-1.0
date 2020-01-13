import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (!user) throw new UnauthorizedException();

    const compare = await this.comparePassword(user.password, password);
    if (user && compare) {
      const { name, email, id } = user;
      const result = {
        name,
        email,
        id
      };
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { sub: user.id };

    return {
      message: 'Login successful',
      success: true,
      token: `Bearer ${this.jwtService.sign(payload)}`
    };
  }

  async comparePassword(
    hashPassword: string,
    plainPassword: string
  ): Promise<any> {
    return await bcrypt.compare(plainPassword, hashPassword);
  }
}
