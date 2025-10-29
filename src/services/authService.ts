import { IUser } from '../models/userModel';
import { users } from '../db/memoryDb';
import jwt from 'jsonwebtoken';

const SECRET = 'seu_segredo_jwt'; // Troque por variável de ambiente em produção

export class AuthService {
    public async register(userData: IUser): Promise<IUser> {
        const exists = users.find(u => u.email === userData.email);
        if (exists) throw new Error('Usuário já cadastrado');
        userData.id = String(Date.now());
        users.push(userData);
        return userData;
    }

    public async login(email: string, password: string): Promise<string> {
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) throw new Error('Credenciais inválidas');
        const token = jwt.sign({ id: user.id, role: user.role, name: user.name, email: user.email }, SECRET, { expiresIn: '1h' });
        return token;
    }
}
