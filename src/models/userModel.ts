export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    role: 'student' | 'trainer';
    age: number;
    weight: number;
    height: number;
}
