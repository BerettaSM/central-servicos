import styled from 'styled-components';

import { PriorityStatusInterface } from '../PriorityIcon';

export const Container = styled.div<PriorityStatusInterface>`
    background: var(--THEME_COLOR_005);
    border-radius: 8px;
    height: 6px;
    width: 60px;

    ${(p: PriorityStatusInterface) => {

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