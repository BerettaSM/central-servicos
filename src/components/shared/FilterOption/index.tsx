import React from 'react';

import { Container, RightArrowIcon } from './styles';

import { InnerTextInterface } from '../Interfaces/InnerTextInterface';

const FilterOption: React.FC<InnerTextInterface> = (props) => {

    return (

        <Container>

            <RightArrowIcon />

            <span>{props.innerText}</span>

        </Container>

    );
    
}

export default FilterOption;