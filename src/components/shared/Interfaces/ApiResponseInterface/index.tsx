import { TicketDTOInterface } from "../TicketDTOInterface";

export interface ApiResponse {
    content: TicketDTOInterface[];
    first: boolean;
    last: boolean;
    totalElements: number;
    totalPages: number;
    number: number;
    empty: boolean;
}
