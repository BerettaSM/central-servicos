import styled from 'styled-components';

import { CircleFill } from 'styled-icons/bootstrap';

import { DeadlineStatusInterface } from '../Interfaces/DeadlineStatusInterface';

export const Icon = styled(CircleFill)<DeadlineStatusInterface>`
    width: 14px;

    ${(p: DeadlineStatusInterface) => {

        const status = p.deadlineStatus;

        if(status) {

            return `color: var(--DEADLINE_ONTIME)`;

        } else {

            return `color: var(--DEADLINE_LATE)`;
            
        }

    }};

`;
