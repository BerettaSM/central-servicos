import React from 'react';

import {
  Container,
  PasswordForm,
  PasswordIcon
} from './styles';

const InputComponentPassword: React.FC = () => {

  const ACTION_PASSWORD = process.env.REACT_APP_ACTION_PASSWORD;

  return (

      <Container>

          <PasswordIcon />

          <PasswordForm type='text' placeholder={ACTION_PASSWORD}  />

      </Container>

  );

}

export default InputComponentPassword;