import styled from 'styled-components';

import PriorityStatus from '../Interfaces/PriorityStatus';

export const Container = styled.div<PriorityStatus>`
    background: var(--THEME_COLOR_005);
    border-radius: 8px;
    height: 6px;
    width: 60px;
    
    ${(p: PriorityStatus) => {

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