import React from 'react';

import {
  Container,
  SearchField,
  SearchForm,
  SearchIcon,
  UserSection,
  UserIcon
} from './styles';

const SearchArea: React.FC = () => {

  return (

    <Container>

      <SearchField>

        <SearchForm type='text' placeholder='Pesquisar Ticket' />

        <SearchIcon />

      </SearchField>

      <UserSection>

        <span>Josisnelson da Silva</span>

        <UserIcon />

      </UserSection>

    </Container>
    
  );
}

export default SearchArea;