import React from 'react';

import { Container, FilterIcon, Wrapper } from './styles';
import FilterOption from '../../../components/shared/FilterOption';

const FilterArea: React.FC = () => {
  return (
      <Container>
        <Wrapper>
          <span>Filtros</span>
          <FilterIcon />
        </Wrapper>
        <FilterOption innerText='Todos os Tickets'/>
        <FilterOption innerText='Tickets Abertos'/>
        <FilterOption innerText='Tickets Em Andamento'/>
        <FilterOption innerText='Meus Tickets Em Andamento'/>
        <FilterOption innerText='Meus Tickets Fechados'/>
      </Container>
  );
}

export default FilterArea;