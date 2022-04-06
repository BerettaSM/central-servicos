import styled from 'styled-components';

import { CircleFill } from 'styled-icons/bootstrap';

import { DeadlineStatusInterface } from '.';

export const Icon = styled(CircleFill)<DeadlineStatusInterface>`
    width: 14px;

    ${(p: DeadlineStatusInterface) => {

        const status = p.deadlineStatus;

        if(status === 1) {
            return `color: var(--DEADLINE_ONTIME)`;
        } else if (status === 2) {
            return `color: var(--DEADLINE_LATE)`;
        }

    }};

`;
