import styled from 'styled-components';

export const Container = styled.div`
    grid-area: TA;

    background: var(--THEME_COLOR_002);
    border-radius: 8px;
    color: var(--THEME_COLOR_005);
`;

export const TopOuterWrapper = styled.div`
    display: flex;
    align-items: center;
    
    width: 100%;
    margin-bottom: 30px;
    padding: 12px;
    
`;

export const TopInnerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;

    > span {
        color: var(--THEME_COLOR_001);
        cursor: pointer;
    }
`;

export const MidWrapper = styled.div`
    display: flex;
    align-items: end;
    
    width: 100%;
    padding: 0 12px;

    > div:first-child {
        margin-right: 12px;
    }
`;

export const BottomOuterWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    margin-top: 20px;
    padding: 0 12px;

`;

export const BottomInnerWrapper = styled.div`
    display: flex;
    align-items: center;
    
    width: 100%;
    margin-top: 6px;

    > span {
        margin-left: 9px;
    }
`;
