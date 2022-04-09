import styled from 'styled-components';

import { CircleFill } from 'styled-icons/bootstrap';

import { DeadlineStatus } from '../Interfaces/DeadlineStatus';

export const Icon = styled(CircleFill)<DeadlineStatus>`
    width: 14px;

    ${(p: DeadlineStatus) => {

        const status = p.deadlineStatus;

        if(status === 1) {

            return `color: var(--DEADLINE_ONTIME)`;

        } else if (status === 2) {

            return `color: var(--DEADLINE_LATE)`;
            
        }

    }};

`;
