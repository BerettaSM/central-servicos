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

  const {
    REACT_APP_MOCK_USER_NAME
  } = process.env;

  return (

    <Container>

      <SearchField>

        <SearchForm type='text' placeholder="Pesquisar Ticket" />

        <SearchIcon />

      </SearchField>

      <UserSection>

        <span>{REACT_APP_MOCK_USER_NAME}</span>

        <UserIcon />

      </UserSection>

    </Container>
    
  );
}

export default SearchArea;