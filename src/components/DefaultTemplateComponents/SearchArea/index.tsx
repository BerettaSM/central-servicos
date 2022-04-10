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

  const ACTION_SEARCH_TICKET = process.env.REACT_APP_ACTION_SEARCH_TICKET;
  const MOCK_USER_NAME = process.env.REACT_APP_MOCK_USER_NAME;

  return (

    <Container>

      <SearchField>

        <SearchForm type='text' placeholder={ACTION_SEARCH_TICKET} />

        <SearchIcon />

      </SearchField>

      <UserSection>

        <span>{MOCK_USER_NAME}</span>

        <UserIcon />

      </UserSection>

    </Container>
    
  );
}

export default SearchArea;