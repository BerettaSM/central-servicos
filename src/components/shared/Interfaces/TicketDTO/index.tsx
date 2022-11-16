import OpenedBy from '../OpenedBy';
import User from '../User';

export default interface TicketDTO {
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
