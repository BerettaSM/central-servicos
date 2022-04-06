import styled from 'styled-components';

import { CircleFill, Clock } from 'styled-icons/bootstrap';

interface TicketComponentStatusData {
    priority?: any;
    deadlineStatus?: any;
}

export const CurrentAttendantIcon = styled(Clock)`
    width: 14px;
`;

export const Container = styled.div`
    background: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 170px;

    
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3px 0;

    > span {
        margin-left: 6px;
    }
`;

export const PriorityIcon = styled(CircleFill)`
    width: 14px;

    ${(p: TicketComponentStatusData) => {
        const low = "Baixa";
        const medium = "Média";
        const high = "Alta";
        const urgent = "Altíssima";

        const { priority } = p;

        if(priority === low) {
            return `color: var(--PRIORITY_LOW);`;
        } else if(priority === medium) {
            return `color: var(--PRIORITY_MEDIUM);`;
        } else if(priority === high) {
            return `color: var(--PRIORITY_HIGH);`;
        } else if(priority === urgent) {
            return `color: var(--PRIORITY_URGENT);`;
        }

    }};

`;

export const DeadlineIcon = styled(CircleFill)`
    width: 14px;

    ${(p: TicketComponentStatusData) => {

        const onTime = "No Prazo";
        const late = "Atrasado";

        const { deadlineStatus } = p;

        if(deadlineStatus === onTime) {
            return `color: var(--PRIORITY_LOW);`;
        } else if(deadlineStatus === late) {
            return `color: var(--PRIORITY_URGENT);`;
        } 

    }};

`;