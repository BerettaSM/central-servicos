import { OpenedBy } from '../OpenedByInterface';
import { User } from '../UserInterface';

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

