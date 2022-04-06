import React from 'react';

import { Button, RightArrowIcon } from './styles';

interface Props {
  InnerText: string
}

const NextButton: React.FC<Props> = (props) => {
  return(
    <Button>
        <span>{props.InnerText}</span>
        <RightArrowIcon />
    </Button>
  );
}

export default NextButton;