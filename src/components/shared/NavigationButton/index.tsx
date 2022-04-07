import React, { MouseEventHandler } from 'react';

import { Button, LeftArrowIcon, RightArrowIcon } from './styles';

export interface BtnInterface {
  innerText?: string;
  onClick?: MouseEventHandler;
  isDisabled?: boolean;
  renderArrow?: string;
}

const NavigationButton: React.FC<BtnInterface> = (props) => {
  return(
    <Button onClick={props.onClick} isDisabled={props.isDisabled}>
        {props.renderArrow === 'left' && <LeftArrowIcon />}
        <span>{props.innerText}</span>
        {props.renderArrow === 'right' && <RightArrowIcon />}
    </Button>
  );
}

export default NavigationButton;