import TicketDTO from "../TicketDTO";

export interface FindAllApiResponse {
    content: TicketDTO[];
    first: boolean;
    last: boolean;
    totalElements: number;
    totalPages: number;
    number: number;
    empty: boolean;
}
