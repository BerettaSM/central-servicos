import React from 'react';
import { Container } from "./styles";
import ISpinner from '../Interfaces/ISpinner';

const Spinner: React.FC<ISpinner> = ({ width, smoothness, clockwise, doubleSemiCircles }) => {

    return(

        <Container
            width={width}
            smoothness={smoothness}
            clockwise={clockwise}
            doubleSemiCircles={doubleSemiCircles}
        /> 

    );

}

export default Spinner;