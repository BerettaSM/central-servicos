import Level from '../Level';

export default interface OpenedBy {
    id: number;
    fullName: string;
    level: Level;
    enabled: boolean;
}