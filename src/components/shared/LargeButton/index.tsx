import React from 'react';

import { Container } from './styles';

import { InnerText } from '../Interfaces/InnerText';

const LargeButton: React.FC<InnerText> = (props) => {
  return (
      <Container>
          <span>{props.innerText}</span>
      </Container>
  );
}

export default LargeButton;