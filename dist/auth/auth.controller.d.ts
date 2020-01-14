import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        message: string;
        success: boolean;
        token: string;
    }>;
    getProfile(req: any): any;
}
