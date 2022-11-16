import TicketRequestDTO from "../TicketRequestDTO";


export default interface UpdateNewTicket {
    newTicketState?: [ticket: TicketRequestDTO, setTicket: React.Dispatch<React.SetStateAction<TicketRequestDTO>>];
    propertyToUpdate?: keyof TicketRequestDTO;
}