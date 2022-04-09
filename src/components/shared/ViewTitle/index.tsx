import React from 'react';

import { Container, RightArrowIcon } from './styles';

import { InnerText } from '../Interfaces/InnerText';

const ViewTitle: React.FC<InnerText> = (props) => {
    return (
        <Container>
            <RightArrowIcon />
            <span>{props.innerText}</span>
        </Container>
    );
}

export default ViewTitle;