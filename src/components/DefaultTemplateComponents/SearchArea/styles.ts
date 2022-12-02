import styled from 'styled-components';

import { User } from 'styled-icons/boxicons-solid';
import { Search } from 'styled-icons/bootstrap';

export const Container = styled.div`
    grid-area: SA;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background: var(--THEME_COLOR_001);
`;

export const SearchField = styled.div`
    display: flex;

    background: var(--THEME_COLOR_002);
    border-radius: 8px;
    color: var(--THEME_COLOR_005);
    
    height: 30px;
    padding: 8px 12px 8px 16px;
    width: 40%;
`;

export const SearchForm = styled.input`
    display: flex;
    flex-direction: row;
    background-color: inherit;
    border-right: 1px solid var(--THEME_COLOR_005);
    font-size: 12.8px;
    width: 100%;
`;

export const SearchIcon = styled(Search)`
    margin-left: 8px;
`;

export const UserSection = styled.div`
    display: flex;
    align-items: end;

    color: var(--THEME_COLOR_002);
    
    margin-right: 30px;
    
    > span {
        margin-right: 13px;
    }
`;

export const UserIcon = styled(User)`
    width: 22px;
`;

