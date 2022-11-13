import styled from 'styled-components';

import { PriorityStatusInterface } from '../Interfaces/PriorityStatusInterface';

export const Container = styled.div<PriorityStatusInterface>`
    background: var(--THEME_COLOR_005);
    border-radius: 8px;
    height: 6px;
    width: 60px;
    
    ${(p: PriorityStatusInterface) => {

        const status = p.priorityStatus;
        
        switch(status) {

            case "Baixa":
                return `background: var(--PRIORITY_LOW);`;

            case "Média":
                return `background: var(--PRIORITY_MEDIUM);`;

            case "Alta":
                return `background: var(--PRIORITY_HIGH);`;

            case "Altíssima":
                return `background: var(--PRIORITY_URGENT);`;
                
        }

    }};
`;