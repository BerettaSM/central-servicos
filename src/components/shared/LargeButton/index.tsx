import React from 'react';

import { Button } from './styles';

import InnerText from '../Interfaces/InnerText';

const LargeButton: React.FC<InnerText> = ({ innerText }) => {

  return (

      <Button>

          <span>{innerText}</span>

      </Button>

  );

}

export default LargeButton;