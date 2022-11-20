export default interface TicketMessageRequestDTO {
    message: string;
    ticketId: number | undefined;
    senderId: number | undefined;
}