import React from 'react';

import { Button } from './styles';

import InnerText from '../Interfaces/InnerText';
import Clickable from '../Interfaces/Clickable';

const LargeButton: React.FC<InnerText & Clickable> = ({ innerText, onClick }) => {

  return (

      <Button onClick={onClick}>

          <span>{innerText}</span>

      </Button>

  );

}

export default LargeButton;