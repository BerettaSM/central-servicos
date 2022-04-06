import React from 'react';

import { Button, LeftArrowIcon } from './styles';

interface Props {
  InnerText: string
}

const PreviousButton: React.FC<Props> = (props) => {
  return(
    <Button>
        <LeftArrowIcon />
        <span>{props.InnerText}</span>
    </Button>
  );
}

export default PreviousButton;