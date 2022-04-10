import React from 'react';
import { Link } from 'react-router-dom';

import FilterOption from '../../../components/shared/FilterOption';

import {
  Container,
  FilterIcon,
  Wrapper
} from './styles';

import { FilterInterface } from '../../shared/Interfaces/FilterInterface';

const FilterArea: React.FC<FilterInterface> = (props) => {

  const TITLE_ALL_TICKETS        = process.env.REACT_APP_TITLE_ALL_TICKETS;
  const TITLE_OPENED_TICKETS     = process.env.REACT_APP_TITLE_OPENED_TICKETS;
  const TITLE_ONGOING_TICKETS    = process.env.REACT_APP_TITLE_ONGOING_TICKETS;
  const TITLE_MY_ONGOING_TICKETS = process.env.REACT_APP_TITLE_MY_ONGOING_TICKETS;
  const TITLE_MY_CLOSED_TICKETS  = process.env.REACT_APP_TITLE_MY_CLOSED_TICKETS;

  const { selectedFilter } = props;
  
  return (

      <Container>

        <Wrapper>

          <span>Filtros</span>

          <FilterIcon />
          
        </Wrapper>

        <Link to={'/tickets'}>

          <FilterOption innerText={TITLE_ALL_TICKETS} />

        </Link>

        <Link to={'/tickets/open-tickets'}>

          <FilterOption innerText={TITLE_OPENED_TICKETS} />

        </Link>

        <Link to={'/tickets/ongoing-tickets'}>

          <FilterOption innerText={TITLE_ONGOING_TICKETS} />

        </Link>

        <Link to={'/tickets/my-ongoing-tickets'}>

          <FilterOption innerText={TITLE_MY_ONGOING_TICKETS} />

        </Link>

        <Link to={'/tickets/my-closed-tickets'}>

          <FilterOption innerText={TITLE_MY_CLOSED_TICKETS} />

        </Link>

      </Container>
      
  );
}

export default FilterArea;