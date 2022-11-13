import  { Level }  from '../LevelInterface';

export interface User {
    id: number;
    fullName: string;
    level: Level;
    enabled: boolean;
}