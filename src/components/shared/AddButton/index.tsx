import React from 'react';

import { Button, PlusIcon } from './styles';

export interface ButtonInnerText {
    innerText: string
}

const AddButton: React.FC<ButtonInnerText> = (props) => {
  return(
    <Button>
        <span>{props.innerText}</span>
        <PlusIcon />
    </Button>
  );
}

export default AddButton;