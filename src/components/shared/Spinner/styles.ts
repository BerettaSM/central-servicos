import styled, { keyframes, css } from 'styled-components';
import ISpinner from '../Interfaces/ISpinner';

const spinner = (deg: number) => keyframes`
    to {
        transform: rotate(${deg}deg);
    }
`;

const animation = (clockwise: boolean, smoothness: string) => css`
    animation: ${clockwise ? spinner(360) : spinner(-360)} 1s ${smoothness} infinite;
`;

export const Container = styled.div<ISpinner>`
    &::before {
        content: "";
        border-style: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        border-top: 3px solid var(--THEME_COLOR_001);

        ${(s: ISpinner) => s.doubleSemiCircles ? `
            border-bottom: 3px solid var(--THEME_COLOR_001);
        ` : ''}

        ${(s: ISpinner) => animation(s.clockwise ?? true, s.smoothness)}

        ${(s: ISpinner) => `
            height: ${s.width}px;
            width: ${s.width}px;
            margin-top: -${s.width/2}px;
            margin-left: -${s.width/2}px;
        `}

    }
`;