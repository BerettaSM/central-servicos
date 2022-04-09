import React from 'react';

import PriorityIcon from '../../shared/PriorityIcon';
import DeadlineIcon from '../../shared/DeadlineIcon';
import {
    Container,
    CurrentAttendantIcon,
    StandByIcon,
    Wrapper
} from './styles';

import { TicketData } from '../../shared/Interfaces/TicketData';

const StatusArea: React.FC<TicketData> = (props) => {

    const { priorityStatus, currentAttendant, deadlineStatus } = props.data;

    const PRIORITY_LOW = process.env.REACT_APP_PRIORITY_LOW;
    const PRIORITY_MEDIUM = process.env.REACT_APP_PRIORITY_MEDIUM;
    const PRIORITY_HIGH = process.env.REACT_APP_PRIORITY_HIGH;
    const PRIORITY_URGENT = process.env.REACT_APP_PRIORITY_URGENT;

    const SITUATION_ON_TIME = process.env.REACT_APP_SITUATION_ON_TIME;
    const SITUATION_LATE = process.env.REACT_APP_SITUATION_LATE;
    const SITUATION_PENDING = process.env.REACT_APP_SITUATION_PENDING;

    const priorityString = priorityStatus === 1 ? PRIORITY_LOW
                          :priorityStatus === 2 ? PRIORITY_MEDIUM
                          :priorityStatus === 3 ? PRIORITY_HIGH : PRIORITY_URGENT;

    const attendantString = currentAttendant ? currentAttendant : SITUATION_PENDING;

    const deadlineString = deadlineStatus === 1 ? SITUATION_ON_TIME : SITUATION_LATE;

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