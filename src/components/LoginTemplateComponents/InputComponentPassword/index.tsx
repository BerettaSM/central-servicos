import React from 'react';

import { Container, PasswordForm, PasswordIcon } from './styles';

const InputComponentPassword: React.FC = () => {
  return (
      <Container>
          <PasswordIcon />
          <PasswordForm type='text' placeholder='Password'  />
      </Container>
  );
}

export default InputComponentPassword;