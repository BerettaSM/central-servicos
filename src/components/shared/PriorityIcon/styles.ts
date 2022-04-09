import styled from 'styled-components';

import { CircleFill } from 'styled-icons/bootstrap';

import { PriorityStatus } from '../Interfaces/PriorityStatus';

export const Icon = styled(CircleFill)<PriorityStatus>`
    width: 14px;

    ${(p: PriorityStatus) => {

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
