import React from 'react';

import { Button, CancelIcon } from './styles';

interface Props {
    InnerText: string
}

const CancelButton: React.FC<Props> = (props) => {
  return(
    <Button>
        <span>{props.InnerText}</span>
        <CancelIcon />
    </Button>
  );
}

export default CancelButton;