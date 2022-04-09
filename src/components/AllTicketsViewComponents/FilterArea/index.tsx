import React from 'react';

import FilterOption from '../../../components/shared/FilterOption';
import {
  Container,
  FilterIcon,
  Wrapper
} from './styles';

const FilterArea: React.FC = () => {

  const TITLE_ALL_TICKETS        = process.env.REACT_APP_TITLE_ALL_TICKETS;
  const TITLE_OPENED_TICKETS     = process.env.REACT_APP_TITLE_OPENED_TICKETS;
  const TITLE_ONGOING_TICKETS    = process.env.REACT_APP_TITLE_ONGOING_TICKETS;
  const TITLE_MY_ONGOING_TICKETS = process.env.REACT_APP_TITLE_MY_ONGOING_TICKETS;
  const TITLE_MY_CLOSED_TICKETS  = process.env.REACT_APP_TITLE_MY_CLOSED_TICKETS;
  
  return (

      <Container>

        <Wrapper>

          <span>Filtros</span>

          <FilterIcon />
          
        </Wrapper>

        <FilterOption innerText={TITLE_ALL_TICKETS} />

        <FilterOption innerText={TITLE_OPENED_TICKETS} />

        <FilterOption innerText={TITLE_ONGOING_TICKETS} />

        <FilterOption innerText={TITLE_MY_ONGOING_TICKETS} />

        <FilterOption innerText={TITLE_MY_CLOSED_TICKETS} />

      </Container>
      
  );
}

export default FilterArea;