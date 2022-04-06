import React from 'react';

import { Container, LoginForm, UserIcon } from './styles';

const InputComponentLogin: React.FC = () => {
  return (
      <Container>
          <UserIcon />
          <LoginForm type='text' placeholder='Login'  />
      </Container>
  );
}

export default InputComponentLogin;