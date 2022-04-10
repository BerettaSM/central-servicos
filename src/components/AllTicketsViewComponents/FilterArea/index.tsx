import React from 'react';
import { Link } from 'react-router-dom';

import FilterOption from '../../../components/shared/FilterOption';

import {
  Container,
  FilterIcon,
  Wrapper
} from './styles';

import { FilterAreaInterface } from '../../shared/Interfaces/FilterAreaInterface';

const FilterArea: React.FC<FilterAreaInterface> = (props) => {

  const { selectedFilter, handleResetPage } = props;

  const TITLE_FILTER             = process.env.REACT_APP_TITLE_FILTER;
  const TITLE_ALL_TICKETS        = process.env.REACT_APP_TITLE_ALL_TICKETS;
  const TITLE_OPENED_TICKETS     = process.env.REACT_APP_TITLE_OPENED_TICKETS;
  const TITLE_ONGOING_TICKETS    = process.env.REACT_APP_TITLE_ONGOING_TICKETS;
  const TITLE_MY_ONGOING_TICKETS = process.env.REACT_APP_TITLE_MY_ONGOING_TICKETS;
  const TITLE_MY_CLOSED_TICKETS  = process.env.REACT_APP_TITLE_MY_CLOSED_TICKETS;

  const IS_FILTER_1_SELECTED     = selectedFilter === 1;
  const IS_FILTER_2_SELECTED     = selectedFilter === 2;
  const IS_FILTER_3_SELECTED     = selectedFilter === 3;
  const IS_FILTER_4_SELECTED     = selectedFilter === 4;
  const IS_FILTER_5_SELECTED     = selectedFilter === 5;
  
  return (

      <Container>

        <Wrapper>

          <span>{TITLE_FILTER}</span>

          <FilterIcon />
          
        </Wrapper>

        <Link to={'/tickets'}>

          <FilterOption
            handleResetPage={handleResetPage}
            isSelected={IS_FILTER_1_SELECTED}
            innerText={TITLE_ALL_TICKETS}
          />

        </Link>

        <Link to={'/tickets/open-tickets'}>

          <FilterOption
            handleResetPage={handleResetPage}
            isSelected={IS_FILTER_2_SELECTED}
            innerText={TITLE_OPENED_TICKETS}
          />

        </Link>

        <Link to={'/tickets/ongoing-tickets'}>

          <FilterOption
            handleResetPage={handleResetPage}
            isSelected={IS_FILTER_3_SELECTED}
            innerText={TITLE_ONGOING_TICKETS}
          />

        </Link>

        <Link to={'/tickets/my-ongoing-tickets'}>

          <FilterOption
            handleResetPage={handleResetPage}
            isSelected={IS_FILTER_4_SELECTED}
            innerText={TITLE_MY_ONGOING_TICKETS}
          />

        </Link>

        <Link to={'/tickets/my-closed-tickets'}>

          <FilterOption
            handleResetPage={handleResetPage}
            isSelected={IS_FILTER_5_SELECTED}
            innerText={TITLE_MY_CLOSED_TICKETS}
          />

        </Link>

      </Container>
      
  );
}

export default FilterArea;