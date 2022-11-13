export interface TicketDTOInterface {
    ticketId: number;
    status: number;
    descStatus: string;
    title: string;
    openedBy: OpenedBy;
    dateStart: string;
    dateEnd: string;
    dateUpdated: string | null;
    priority: string;
    responsibleUser: User;
    onTime: boolean;
}

interface User {
    id: number;
    fullName: string;
    level: Level;
    enabled: boolean;
}

interface OpenedBy {
    id: number;
    fullName: string;
    level: Level;
    enabled: boolean;
}

interface Level {
    id: number;
    levelCode: string;
    levelName: string;
    description: string;
    enabled: boolean;
}