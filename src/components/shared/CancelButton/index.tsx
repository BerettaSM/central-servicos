import React from 'react';

import {
  Button,
  CancelIcon
} from './styles';

import InnerText from '../Interfaces/InnerText';

const CancelButton: React.FC<InnerText> = ({ innerText }) => {

  return(

    <Button>

        <span>{innerText}</span>

        <CancelIcon />

    </Button>

  );
  
}

export default CancelButton;