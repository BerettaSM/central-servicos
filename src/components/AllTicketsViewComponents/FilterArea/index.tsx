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

  const { handleResetPage, selectedFilter } = props;

  const IS_FILTER_1_SELECTED = selectedFilter === 1;
  const IS_FILTER_2_SELECTED = selectedFilter === 2;
  const IS_FILTER_3_SELECTED = selectedFilter === 3;
  const IS_FILTER_4_SELECTED = selectedFilter === 4;
  const IS_FILTER_5_SELECTED = selectedFilter === 5;

  const {
    REACT_APP_TITLE_FILTER,
    REACT_APP_TITLE_ALL_TICKETS,
    REACT_APP_TITLE_OPENED_TICKETS,
    REACT_APP_TITLE_ONGOING_TICKETS,
    REACT_APP_TITLE_MY_ONGOING_TICKETS,
    REACT_APP_TITLE_MY_CLOSED_TICKETS
  } = process.env;
  
  return (

      <Container>

        <Wrapper>

          <span>{REACT_APP_TITLE_FILTER}</span>

          <FilterIcon />
          
        </Wrapper>

        <Link to={'/tickets'}>

          <FilterOption
            handleResetPage={handleResetPage}
            isSelected={IS_FILTER_1_SELECTED}
            innerText={REACT_APP_TITLE_ALL_TICKETS}
          />

        </Link>

        <Link to={'/tickets/open-tickets'}>

          <FilterOption
            handleResetPage={handleResetPage}
            isSelected={IS_FILTER_2_SELECTED}
            innerText={REACT_APP_TITLE_OPENED_TICKETS}
          />

        </Link>

        <Link to={'/tickets/ongoing-tickets'}>

          <FilterOption
            handleResetPage={handleResetPage}
            isSelected={IS_FILTER_3_SELECTED}
            innerText={REACT_APP_TITLE_ONGOING_TICKETS}
          />

        </Link>

        <Link to={'/tickets/my-ongoing-tickets'}>

          <FilterOption
            handleResetPage={handleResetPage}
            isSelected={IS_FILTER_4_SELECTED}
            innerText={REACT_APP_TITLE_MY_ONGOING_TICKETS}
          />

        </Link>

        <Link to={'/tickets/my-closed-tickets'}>

          <FilterOption
            handleResetPage={handleResetPage}
            isSelected={IS_FILTER_5_SELECTED}
            innerText={REACT_APP_TITLE_MY_CLOSED_TICKETS}
          />

        </Link>

      </Container>
      
  );
  
}

export default FilterArea;