export interface IWorkout {
    id: string;
    studentId: string;
    upperBody: string[];
    lowerBody: string[];
    series: number;
    repetitions: number;
    load: 'leve' | 'pesada';
}
