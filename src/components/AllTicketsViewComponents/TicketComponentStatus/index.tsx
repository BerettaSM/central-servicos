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

    const { priority, responsibleUser, onTime } = props.data;

    const { fullName } = responsibleUser;

    const {
        REACT_APP_SITUATION_ON_TIME,
        REACT_APP_SITUATION_LATE
    } = process.env;

    const deadlineString  = onTime ? REACT_APP_SITUATION_ON_TIME
                                   : REACT_APP_SITUATION_LATE;
    

    return (

        <Container>

            <Wrapper>

                <PriorityIcon priorityStatus={priority} />

                <span>{priority}</span>

            </Wrapper>

            <Wrapper>

                {fullName ? <CurrentAttendantIcon /> : <StandByIcon />}

                <span>{fullName}</span>

            </Wrapper>

            <Wrapper>

                <DeadlineIcon deadlineStatus={onTime} />

                <span>{deadlineString}</span>

            </Wrapper>
            
        </Container>
        
    );
}

export default StatusArea;