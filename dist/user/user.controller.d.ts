import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    fetchAllUser(): Promise<User[]>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    deleteUser(id: any): Promise<User>;
    private hashPassword;
}
