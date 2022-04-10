import React from 'react';

import { Button } from './styles';

import { InnerTextInterface } from '../Interfaces/InnerTextInterface';

const LargeButton: React.FC<InnerTextInterface> = (props) => {

  return (

      <Button>

          <span>{props.innerText}</span>

      </Button>

  );

}

export default LargeButton;