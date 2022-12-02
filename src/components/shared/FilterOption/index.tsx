import React from 'react';

import { Container, RightArrowIcon } from './styles';

import {default as IFilterOption} from '../Interfaces/FilterOption';

const FilterOption: React.FC<IFilterOption> = ({ isSelected, handleResetPage, innerText }) => {

    return (

        <Container isSelected={isSelected} onClick={handleResetPage}>

            <RightArrowIcon />

            <span>{innerText}</span>

        </Container>

    );
    
}

export default FilterOption;