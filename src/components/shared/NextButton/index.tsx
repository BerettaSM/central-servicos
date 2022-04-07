import React, { MouseEventHandler } from 'react';

import { Button, RightArrowIcon } from './styles';

export interface BtnInterface {
  innerText?: string;
  onClick?: MouseEventHandler;
  isDisabled?: boolean;
}

const NextButton: React.FC<BtnInterface> = (props) => {
  return(
    <Button onClick={props.onClick} isDisabled={props.isDisabled}>
        <span>{props.innerText}</span>
        <RightArrowIcon isDisabled={props.isDisabled}/>
    </Button>
  );
}

export default NextButton;