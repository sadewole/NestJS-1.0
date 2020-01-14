import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private readonly userModel;
    private readonly jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    fetchAllUser(): Promise<User[]>;
    createUser(user: object): Promise<any>;
    findOne(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    deleteUser(id: string): Promise<any>;
}
