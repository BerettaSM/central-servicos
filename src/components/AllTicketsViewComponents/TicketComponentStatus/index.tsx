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

    const {
        REACT_APP_SITUATION_LATE,
        REACT_APP_SITUATION_ON_TIME,
        REACT_APP_SITUATION_PENDING
    } = process.env;

    const priority = data?.priority;
    
    const currentAttendant = data?.responsibleUser?.fullName ?? REACT_APP_SITUATION_PENDING;

    const onTime = data?.onTime;

    const deadlineString  = onTime ? REACT_APP_SITUATION_ON_TIME
                                   : REACT_APP_SITUATION_LATE;
    

    return (

        <Container>

            <Wrapper>

                <PriorityIcon priorityStatus={priority} />

                <span>{priority}</span>

            </Wrapper>

            <Wrapper>

                {currentAttendant !== REACT_APP_SITUATION_PENDING ? <CurrentAttendantIcon /> : <StandByIcon />}

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