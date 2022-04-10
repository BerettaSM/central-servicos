import React from 'react';

import { Container, RightArrowIcon } from './styles';

import { FilterOptionInterface } from '../Interfaces/FilterOptionInterface';

const FilterOption: React.FC<FilterOptionInterface> = (props) => {

    return (

        <Container isSelected={props.isSelected} onClick={props.handleResetPage}>

            <RightArrowIcon />

            <span>{props.innerText}</span>

        </Container>

    );
    
}

export default FilterOption;