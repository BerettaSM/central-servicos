import TicketMessageResponseDTO from "../TicketMessageResponseDTO";

export default interface TicketMessagesState {
    messages: TicketMessageResponseDTO[];
    setMessages: React.Dispatch<React.SetStateAction<TicketMessageResponseDTO[]>>;
}