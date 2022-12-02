import styled from 'styled-components';

import { CircleFill } from 'styled-icons/bootstrap';

import DeadlineStatus from '../Interfaces/DeadlineStatus';

export const Icon = styled(CircleFill)<DeadlineStatus>`
    width: 14px;

    ${(p: DeadlineStatus) => {

        const status = p.deadlineStatus;

        if(status) {

            return `color: var(--DEADLINE_ONTIME)`;

        } else {

            return `color: var(--DEADLINE_LATE)`;
            
        }

    }};

`;
