import React from 'react';

import {
  Button,
  PlusIcon
} from './styles';

import InnerText from '../Interfaces/InnerText';

import Clickable from '../Interfaces/Clickable';

type InnerTextWithClickable = InnerText & Clickable;

const AddButton: React.FC<InnerTextWithClickable> = ({ innerText, onClick }) => {

  return(

    <Button onClick={onClick}>

        <span>{innerText}</span>

        <PlusIcon />

    </Button>

  );
  
}

export default AddButton;