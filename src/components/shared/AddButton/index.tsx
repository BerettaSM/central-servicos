import React from 'react';

import { Button, PlusIcon } from './styles';

interface Props {
    InnerText: string
}

const AddButton: React.FC<Props> = (props) => {
  return(
    <Button>
        <span>{props.InnerText}</span>
        <PlusIcon />
    </Button>
  );
}

export default AddButton;