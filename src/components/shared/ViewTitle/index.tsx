import React from 'react';

import { Container, RightArrowIcon } from './styles';

interface Props{
    innerText: string;
}

const ViewTitle: React.FC<Props> = (props) => {
    return (
        <Container>
            <RightArrowIcon />
            <span>{props.innerText}</span>
        </Container>
    );
}

export default ViewTitle;