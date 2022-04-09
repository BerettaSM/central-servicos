import React from 'react';

import {
  Container,
  LoginForm,
  UserIcon
} from './styles';

const InputComponentLogin: React.FC = () => {

  const ACTION_LOGIN = process.env.REACT_APP_ACTION_LOGIN;

  return (

      <Container>

          <UserIcon />

          <LoginForm type='text' placeholder={ACTION_LOGIN}  />

      </Container>

  );

}

export default InputComponentLogin;