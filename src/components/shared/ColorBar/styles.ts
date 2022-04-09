import styled from 'styled-components';

import { PriorityStatus } from '../Interfaces/PriorityStatus';

export const Container = styled.div<PriorityStatus>`
    background: var(--THEME_COLOR_005);
    border-radius: 8px;
    height: 6px;
    width: 60px;

    ${(p: PriorityStatus) => {

        const status = p.priorityStatus;

        switch(status) {
            case 1:
                return `background: var(--PRIORITY_LOW);`;
            case 2:
                return `background: var(--PRIORITY_MEDIUM);`;
            case 3:
                return `background: var(--PRIORITY_HIGH);`;
            case 4:
                return `background: var(--PRIORITY_URGENT);`;
        }

    }};
`;