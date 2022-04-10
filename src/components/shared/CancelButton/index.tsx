import React from 'react';

import {
  Button,
  CancelIcon
} from './styles';

import { InnerTextInterface } from '../Interfaces/InnerTextInterface';

const CancelButton: React.FC<InnerTextInterface> = (props) => {

  return(

    <Button>

        <span>{props.innerText}</span>

        <CancelIcon />

    </Button>

  );
  
}

export default CancelButton;