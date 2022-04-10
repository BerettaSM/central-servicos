import React from 'react';

import {
  Button,
  LeftArrowIcon,
  RightArrowIcon
} from './styles';

import { NavigationButtonInterface } from '../Interfaces/NavigationButtonInterface';

const NavigationButton: React.FC<NavigationButtonInterface> = (props) => {

  return(

    <Button onClick={props.onClick} isDisabled={props.isDisabled}>

        {props.renderArrow === 'left' && <LeftArrowIcon />}

        <span>{props.innerText}</span>

        {props.renderArrow === 'right' && <RightArrowIcon />}

    </Button>

  );

}

export default NavigationButton;