import styled from 'styled-components';

// LA - Logo Area
// SA - Search Area
// SB - Side Bar
// MC - Main Content
// BB - Bottom Bar

export const Layout = styled.div`
    display: grid;
    height: 100%;

    grid-template-rows: 55px calc(100% - 55px - 30px) 30px;
    grid-template-columns: 250px calc(100% - 250px);

    grid-template-areas:
        "LA SA"
        "SB MC"
        "BB BB";
    
`;

