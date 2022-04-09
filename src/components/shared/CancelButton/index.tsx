import React from 'react';

import {
  Button,
  CancelIcon
} from './styles';

import { InnerText } from '../Interfaces/InnerText';

const CancelButton: React.FC<InnerText> = (props) => {

  return(

    <Button>

        <span>{props.innerText}</span>

        <CancelIcon />

    </Button>

  );
  
}

export default CancelButton;