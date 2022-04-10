import styled from 'styled-components';

import { Filter } from 'styled-icons/boxicons-regular';

export const Container = styled.div`
    grid-area: FA;
    display: flex;
    flex-direction: column;

    background: var(--THEME_COLOR_003);
    color: var(--THEME_COLOR_004);
    
    min-width: 270px;
    padding-top: 25px;
    z-index: 2;

    > :first-child {
        margin-bottom: 27px;
    }

    > * {
        margin-bottom: 12px;
        text-decoration: none;
    }

`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    font-size: 20px;
    padding: 0 12px;
`;

export const FilterIcon = styled(Filter)`
    width: 22px;
`;