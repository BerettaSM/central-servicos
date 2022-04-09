import React from 'react';

import { Button, CancelIcon } from './styles';
import { ButtonInnerText } from '../AddButton';

const CancelButton: React.FC<ButtonInnerText> = (props) => {
  return(
    <Button>
        <span>{props.innerText}</span>
        <CancelIcon />
    </Button>
  );
}

export default CancelButton;