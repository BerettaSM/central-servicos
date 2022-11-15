import styled from 'styled-components';

import { NavigateNext } from 'styled-icons/material';

import FilterOption from '../Interfaces/FilterOption';

export const Container = styled.div<FilterOption>`
    display: flex;
    flex-direction: row;
    align-items: center;

    background: var(--THEME_COLOR_003);
    color: var(--THEME_COLOR_004);

    border: var(--THEME_COLOR_003) solid 1px;
    border-radius: 8px;
    height: 40px;

    :hover {
        background: var(--THEME_COLOR_002);
        color: var(--THEME_COLOR_001);
    }

    ${(p: FilterOption) => {

        if (p.isSelected) {

            return `
                background: var(--THEME_COLOR_002);
                color: var(--THEME_COLOR_001);
                border: var(--THEME_COLOR_001) solid 1px;
                cursor: default;
            `;

        } else {

            return `
                cursor: pointer;
            `;

        }

    }}

`;

export const RightArrowIcon = styled(NavigateNext)`
    width: 24px;
`;
