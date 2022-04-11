import React from 'react';

import {
  Container,
  PasswordForm,
  PasswordIcon
} from './styles';

const InputComponentPassword: React.FC = () => {

  const { REACT_APP_ACTION_PASSWORD } = process.env;

  return (

      <Container>

          <PasswordIcon />

          <PasswordForm type='text' placeholder={REACT_APP_ACTION_PASSWORD}  />

      </Container>

  );

}

export default InputComponentPassword;