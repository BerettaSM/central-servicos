import styled from 'styled-components';

import {default as IClickableSpan} from '../Interfaces/ClickableSpan';

export const Span = styled.span<IClickableSpan>`

    ${(p: IClickableSpan) => {

        const { isDisabled } = p;
        
        const color = p.negativeColor ? 'white' : 'var(--THEME_COLOR_001)';

        if(isDisabled) {

            return `
                color: var(--THEME_COLOR_006);
            `;

        } else {

            return `
                color: ${color};
                cursor: pointer;
            
                transition: 500ms linear;
            
                :hover {
                    transform: scale(1.05);
                }
            `;

        }

    }};
    
`;
