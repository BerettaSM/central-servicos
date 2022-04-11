import React from 'react';

import {
  Container,
  LoginForm,
  UserIcon
} from './styles';

const InputComponentLogin: React.FC = () => {

  const { REACT_APP_ACTION_LOGIN } = process.env;

  return (

      <Container>

          <UserIcon />

          <LoginForm type='text' placeholder={REACT_APP_ACTION_LOGIN}  />

      </Container>

  );

}

export default InputComponentLogin;