import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        message: string;
        success: boolean;
        token: string;
    }>;
    comparePassword(hashPassword: string, plainPassword: string): Promise<any>;
}
