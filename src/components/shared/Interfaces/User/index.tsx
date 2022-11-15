import  Level  from '../Level';

export default interface User {
    id: number;
    fullName: string;
    level: Level;
    enabled: boolean;
}