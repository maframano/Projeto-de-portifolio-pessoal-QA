import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export class AuthController {
    private authService: AuthService;
    
    constructor() {
        this.authService = new AuthService();
    }

    public async register(req: Request, res: Response): Promise<void> {
        try {
            const userData = req.body;
            const result = await this.authService.register(userData);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ message: (error as Error).message });
        }
    }

    public async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body;
            const token = await this.authService.login(email, password);
            res.status(200).json({ token });
        } catch (error) {
            res.status(401).json({ message: (error as Error).message });
        }
    }

    public async getProfile(req: Request, res: Response): Promise<void> {
        try {
            if (!req.user) {
                res.status(401).json({ message: 'Usuário não autenticado.' });
                return;
            }
            res.status(200).json({ profile: req.user });
        } catch (error) {
            res.status(500).json({ message: 'Erro ao buscar perfil.' });
        }
    }
}
