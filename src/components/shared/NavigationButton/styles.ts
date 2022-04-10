import styled from 'styled-components';

import {
    NavigateBefore,
    NavigateNext
} from 'styled-icons/material';

import { NavigationButtonInterface } from '../Interfaces/NavigationButtonInterface';

export const Button = styled.div<NavigationButtonInterface>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    background: var(--THEME_COLOR_002);
    border: 1px solid var(--THEME_COLOR_002);
    color: var(--THEME_COLOR_004);

    cursor: pointer;
    user-select: none;

    border-radius: 8px;
    font-size: 18px;
    height: 40px;
    width: 120px;
    
    :hover {
        border: 1px solid var(--THEME_COLOR_001);
        color: var(--THEME_COLOR_001);
    }
    
    ${(p: NavigationButtonInterface) => {
        if (p.isDisabled){
            return `
                background: var(--THEME_COLOR_002);
                color: var(--THEME_COLOR_006);
                cursor: default;
                : hover{
                    border: 1px solid var(--THEME_COLOR_002);
                    color: var(--THEME_COLOR_006);
                }
                > :first-child, > :last-child {
                    color: var(--THEME_COLOR_006);
                }
            `;
        }
    }};
`;

export const LeftArrowIcon = styled(NavigateBefore)`
    color: var(--THEME_COLOR_001);
    width: 24px;  
`;

export const RightArrowIcon = styled(NavigateNext)`
    color: var(--THEME_COLOR_001);
    width: 24px;
`;