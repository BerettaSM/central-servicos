import React from 'react';

import { Button } from './styles';

import { InnerText } from '../Interfaces/InnerText';

const LargeButton: React.FC<InnerText> = (props) => {

  return (

      <Button>

          <span>{props.innerText}</span>

      </Button>

  );

}

export default LargeButton;