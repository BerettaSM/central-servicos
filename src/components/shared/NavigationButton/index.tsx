import React from 'react';

import {
  Button,
  LeftArrowIcon,
  RightArrowIcon
} from './styles';

import { NavigationBtn } from '../Interfaces/NavigationBtn';

const NavigationButton: React.FC<NavigationBtn> = (props) => {

  return(

    <Button onClick={props.onClick} isDisabled={props.isDisabled}>

        {props.renderArrow === 'left' && <LeftArrowIcon />}

        <span>{props.innerText}</span>

        {props.renderArrow === 'right' && <RightArrowIcon />}

    </Button>

  );

}

export default NavigationButton;