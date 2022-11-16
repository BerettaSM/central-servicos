import React from 'react';

import PriorityIcon from '../../shared/PriorityIcon';
import DeadlineIcon from '../../shared/DeadlineIcon';

import {
    Container,
    CurrentAttendantIcon,
    StandByIcon,
    Wrapper
} from './styles';

import TicketData from '../../shared/Interfaces/TicketData';

const StatusArea: React.FC<TicketData> = ({ data }) => {

    const priority = data?.priority;
    
    const currentAttendant = data?.responsibleUser?.fullName ?? "Aguardando Atendimento";

    const onTime = data?.onTime;

    const deadlineString  = onTime ? "No Prazo" : "Atrasado";
    

    return (

        <Container>

            <Wrapper>

                <PriorityIcon priorityStatus={priority} />

                <span>{priority}</span>

            </Wrapper>

            <Wrapper>

                {currentAttendant !== "Aguardando Atendimento" ? <CurrentAttendantIcon /> : <StandByIcon />}

                <span>{currentAttendant}</span>

            </Wrapper>

            <Wrapper>

                <DeadlineIcon deadlineStatus={onTime} />

                <span>{deadlineString}</span>

            </Wrapper>
            
        </Container>
        
    );
}

export default StatusArea;