import React, { MouseEventHandler } from 'react';

import { Button, RightArrowIcon } from './styles';

interface Props {
  innerText: string;
  onClick?: MouseEventHandler;
}

const NextButton: React.FC<Props> = (props) => {
  return(
    <Button onClick={props.onClick}>
        <span>{props.innerText}</span>
        <RightArrowIcon />
    </Button>
  );
}

export default NextButton;