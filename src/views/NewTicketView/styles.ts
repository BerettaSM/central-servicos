import styled from 'styled-components';

// TA - TitleArea
// OA - OptionsArea
// DA - DescriptionArea
// BA - ButtonsArea

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 40px calc(50% - 20px) calc(50% - 20px);
    grid-template-areas: 
        "TA TA"
        "OA DA"
        "BA BA";

    background: var(--THEME_COLOR_003);
    border-radius: 8px;
    height: 100%;
    padding: 12px;
`;



