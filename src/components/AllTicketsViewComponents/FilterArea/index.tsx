import React from 'react';
import { Link } from 'react-router-dom';

import FilterOption from '../../../components/shared/FilterOption';

import {
  Container,
  FilterIcon,
  Wrapper
} from './styles';

import {default as IFilterArea} from '../../shared/Interfaces/FilterArea';

const FilterArea: React.FC<IFilterArea> = ({ handleResetPage, selectedFilter }) => {

  const IS_FILTER_0_SELECTED = selectedFilter === 0;
  const IS_FILTER_1_SELECTED = selectedFilter === 1;
  const IS_FILTER_2_SELECTED = selectedFilter === 2;
  const IS_FILTER_3_SELECTED = selectedFilter === 3;
  const IS_FILTER_4_SELECTED = selectedFilter === 4;

  return (

      <Container>

        <Wrapper>

          <span>Filtro</span>

          <FilterIcon />
          
        </Wrapper>

        <Link to={'/tickets'}>

          <FilterOption
            handleResetPage={handleResetPage}
            isSelected={IS_FILTER_0_SELECTED}
            innerText="Todos Os Tickets"
          />

        </Link>

        <Link to={'/tickets/open-tickets'}>

          <FilterOption
            handleResetPage={handleResetPage}
            isSelected={IS_FILTER_1_SELECTED}
            innerText="Tickets Abertos"
          />

        </Link>

        <Link to={'/tickets/ongoing-tickets'}>

          <FilterOption
            handleResetPage={handleResetPage}
            isSelected={IS_FILTER_2_SELECTED}
            innerText="Tickets Em Andamento"
          />

        </Link>

        <Link to={'/tickets/my-ongoing-tickets'}>

          <FilterOption
            handleResetPage={handleResetPage}
            isSelected={IS_FILTER_3_SELECTED}
            innerText="Meus Tickets Em Andamento"
          />

        </Link>

        <Link to={'/tickets/my-closed-tickets'}>

          <FilterOption
            handleResetPage={handleResetPage}
            isSelected={IS_FILTER_4_SELECTED}
            innerText="Meus Tickets Fechados"
          />

        </Link>

      </Container>
      
  );
  
}

export default FilterArea;