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

    const { priorityStatus, currentAttendant, deadlineStatus } = props.data;

    const {
        REACT_APP_SITUATION_PENDING,
        REACT_APP_SITUATION_ON_TIME,
        REACT_APP_SITUATION_LATE,
        REACT_APP_PRIORITY_LOW,
        REACT_APP_PRIORITY_MEDIUM,
        REACT_APP_PRIORITY_HIGH,
        REACT_APP_PRIORITY_URGENT
    } = process.env;

    const attendantString = currentAttendant ? currentAttendant : REACT_APP_SITUATION_PENDING;

    const deadlineString  = deadlineStatus === 1 ? REACT_APP_SITUATION_ON_TIME
                                                 : REACT_APP_SITUATION_LATE;
    
    const priorityString  = priorityStatus === 1 ? REACT_APP_PRIORITY_LOW
                          : priorityStatus === 2 ? REACT_APP_PRIORITY_MEDIUM
                          : priorityStatus === 3 ? REACT_APP_PRIORITY_HIGH
                                                 : REACT_APP_PRIORITY_URGENT;

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