import React, { MouseEventHandler } from 'react';

import { Button, LeftArrowIcon } from './styles';

export interface BtnInterface {
  innerText?: string;
  onClick?: MouseEventHandler;
  isDisabled?: boolean;
}

const PreviousButton: React.FC<BtnInterface> = (props) => {
  return(
    <Button onClick={props.onClick} isDisabled={props.isDisabled}>
        <LeftArrowIcon isDisabled={props.isDisabled}/>
        <span>{props.innerText}</span>
    </Button>
  );
}

export default PreviousButton;