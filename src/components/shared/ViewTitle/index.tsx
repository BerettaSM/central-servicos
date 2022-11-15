import React from 'react';

import {
    Container,
    RightArrowIcon
} from './styles';

import InnerText from '../Interfaces/InnerText';

const ViewTitle: React.FC<InnerText> = ({ innerText }) => {

    return (

        <Container>

            <RightArrowIcon />

            <span>{innerText}</span>

        </Container>

    );
    
}

export default ViewTitle;