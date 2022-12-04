import React from 'react';

import {
  Container,
  SearchField,
  SearchForm,
  SearchIcon,
  UserSection,
  UserIcon
} from './styles';

import ClickableSpan from '../../shared/ClickableSpan';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../auth/UserProvider';

const SearchArea: React.FC = () => {

  const user = useUser();

  const navigate = useNavigate();

  const logout = () => {

    user.setJwt("");

    navigate("/login");

  }

  return (

    <Container>

      <SearchField>

        <SearchForm type='text' placeholder="Pesquisar Ticket" />

        <SearchIcon />

      </SearchField>

      <UserSection>

        <span>{user.data.fullName}</span>

        <UserIcon />

        <ClickableSpan onClick={logout} innerText='Deslogar' negativeColor={true} />

      </UserSection>

    </Container>
    
  );
}

export default SearchArea;