import styled from 'styled-components';

import { CircleFill } from 'styled-icons/bootstrap';

import { PriorityStatusInterface } from '.';

export const Icon = styled(CircleFill)<PriorityStatusInterface>`
    width: 14px;

    ${(p: PriorityStatusInterface) => {

        const status = p.priorityStatus;

        switch(status) {
            case 1:
                return `color: var(--PRIORITY_LOW);`;
            case 2:
                return `color: var(--PRIORITY_MEDIUM);`;
            case 3:
                return `color: var(--PRIORITY_HIGH);`;
            case 4:
                return `color: var(--PRIORITY_URGENT);`;
        }

    }};

`;
