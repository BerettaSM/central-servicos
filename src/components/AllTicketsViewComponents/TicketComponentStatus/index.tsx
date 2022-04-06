import React from 'react';

import {
    Container,
    CurrentAttendantIcon,
    StandByIcon,
    Wrapper
} from './styles';

import PriorityIcon from '../../shared/PriorityIcon';
import DeadlineIcon from '../../shared/DeadlineIcon';

interface TicketComponentStatusData {
    data: any;
}

const StatusArea: React.FC<TicketComponentStatusData> = (props) => {

    const { priorityStatus, currentAttendant, deadlineStatus } = props.data;

    const priorityString = priorityStatus === 4 ? "Altíssima"
                          :priorityStatus === 3 ? "Alta"
                          :priorityStatus === 2 ? "Média" : "Baixa";

    const attendantString = currentAttendant ? currentAttendant : "Aguardando Atendimento";

    const deadlineString = deadlineStatus === 2 ? "Atrasado" : "No Prazo";

    return (
        <Container>
            <Wrapper>
                <PriorityIcon priorityStatus={priorityStatus} />
                <span>{priorityString}</span>
            </Wrapper>
            <Wrapper>
                {currentAttendant ? <CurrentAttendantIcon /> : <StandByIcon />}
                <span>{attendantString}</span>
            </Wrapper>
            <Wrapper>
                <DeadlineIcon deadlineStatus={deadlineStatus} />
                <span>{deadlineString}</span>
            </Wrapper>
        </Container>
    );
}

export default StatusArea;