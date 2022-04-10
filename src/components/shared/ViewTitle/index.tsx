import React from 'react';

import {
    Container,
    RightArrowIcon
} from './styles';

import { InnerTextInterface } from '../Interfaces/InnerTextInterface';

const ViewTitle: React.FC<InnerTextInterface> = (props) => {

    return (

        <Container>

            <RightArrowIcon />

            <span>{props.innerText}</span>

        </Container>

    );
    
}

export default ViewTitle;