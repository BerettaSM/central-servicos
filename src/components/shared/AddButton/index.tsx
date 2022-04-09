import React from 'react';

import { Button, PlusIcon } from './styles';

import { InnerText } from '../Interfaces/InnerText';

const AddButton: React.FC<InnerText> = (props) => {
  return(
    <Button>
        <span>{props.innerText}</span>
        <PlusIcon />
    </Button>
  );
}

export default AddButton;