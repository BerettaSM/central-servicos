import React from 'react';

import { Container } from './styles';

interface Props {
    innerText: string;
}

const LargeButton: React.FC<Props> = (props) => {
  return (
      <Container>
          <span>{props.innerText}</span>
      </Container>
  );
}

export default LargeButton;