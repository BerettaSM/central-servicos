import React from 'react';

import {
    Container,
    CurrentAttendantIcon,
    Wrapper,
    PriorityIcon,
    DeadlineIcon
} from './styles';

interface TicketComponentStatusData {
    data: any;
}

const StatusArea: React.FC<TicketComponentStatusData> = (props) => {

    const { priorityStatus, currentAttendant, deadlineStatus } = props.data;

    return (
        <Container>
            <Wrapper>
                <PriorityIcon priority={priorityStatus} />
                <span>{priorityStatus}</span>
            </Wrapper>
            <Wrapper>
                <CurrentAttendantIcon />
                <span>{currentAttendant}</span>
            </Wrapper>
            <Wrapper>
                <DeadlineIcon deadlineStatus={deadlineStatus} />
                <span>{deadlineStatus}</span>
            </Wrapper>
        </Container>
    );
}

export default StatusArea;