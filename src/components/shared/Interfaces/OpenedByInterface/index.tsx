import { Level } from '../LevelInterface';

export interface OpenedBy {
    id: number;
    fullName: string;
    level: Level;
    enabled: boolean;
}