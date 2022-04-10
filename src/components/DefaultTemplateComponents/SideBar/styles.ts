import styled from 'styled-components';

import { Home } from 'styled-icons/open-iconic';
import { Chat, HeadsetMic } from 'styled-icons/material';

export const Container = styled.div`
    grid-area: SB;

    display: flex;
    flex-direction: column;

    background: var(--THEME_COLOR_003);
    padding-top: 30px;

    > a {
        text-decoration: none;
    }
`;



export const SideBarOption = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    background: var(--THEME_COLOR_003);
    border-left: 3px solid var(--THEME_COLOR_003);
    color: var(--THEME_COLOR_004);

    cursor: pointer;
    
    height: 47px;
    margin-bottom: 6px;
    width: 100%;

    > span {
        margin-left: 9px;
    }

    :hover {
        background: var(--THEME_COLOR_002);
        border-left: 3px solid var(--THEME_COLOR_001);
        color: var(--THEME_COLOR_001);
    }
`;

export const TicketsIcon = styled(HeadsetMic)`
    width: 17px;
    margin-left: 12px;
`;

export const AnnouncementsIcon = styled(Chat)`
    width: 17px;
    margin-left: 12px;
`;

export const HomeIcon = styled(Home)`
    width: 17px;
    margin-left: 12px;
`;