import React from 'react';

import {
  Button,
  PlusIcon
} from './styles';

import InnerText from '../Interfaces/InnerText';

const AddButton: React.FC<InnerText> = ({ innerText }) => {

  return(

    <Button>

        <span>{innerText}</span>

        <PlusIcon />

    </Button>

  );
  
}

export default AddButton;