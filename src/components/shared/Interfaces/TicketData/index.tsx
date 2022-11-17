import TicketDTO from "../TicketDTO"

export default interface TicketData {
    data: TicketDTO | undefined;
    callback?: React.Dispatch<React.SetStateAction<TicketDTO | undefined>>;
}
