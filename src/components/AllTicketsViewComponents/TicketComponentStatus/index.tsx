import React from 'react';

import PriorityIcon from '../../shared/PriorityIcon';
import DeadlineIcon from '../../shared/DeadlineIcon';

import {
    Container,
    CurrentAttendantIcon,
    StandByIcon,
    Wrapper
} from './styles';

import { TicketDataInterface } from '../../shared/Interfaces/TicketDataInterface';

const StatusArea: React.FC<TicketDataInterface> = (props) => {

    const {
        REACT_APP_SITUATION_LATE,
        REACT_APP_SITUATION_ON_TIME,
        REACT_APP_SITUATION_PENDING
    } = process.env;

    const { data } = props;

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