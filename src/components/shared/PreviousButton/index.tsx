import React, { MouseEventHandler } from 'react';

import { Button, LeftArrowIcon } from './styles';

interface Props {
  innerText: string;
  onClick?: MouseEventHandler;
}

const PreviousButton: React.FC<Props> = (props) => {
  return(
    <Button onClick={props.onClick}>
        <LeftArrowIcon />
        <span>{props.innerText}</span>
    </Button>
  );
}

export default PreviousButton;