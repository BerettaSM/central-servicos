import React from 'react';

import {
  Button,
  PlusIcon
} from './styles';

import { InnerTextInterface } from '../Interfaces/InnerTextInterface';

const AddButton: React.FC<InnerTextInterface> = (props) => {

  return(

    <Button>

        <span>{props.innerText}</span>

        <PlusIcon />

    </Button>

  );
  
}

export default AddButton;