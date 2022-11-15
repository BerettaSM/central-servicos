import React from 'react';

import {
  Button,
  LeftArrowIcon,
  RightArrowIcon
} from './styles';

import {default as INavigationButton} from '../Interfaces/NavigationButton';

const NavigationButton: React.FC<INavigationButton> = ({ onClick, isDisabled, renderArrow, innerText }) => {

  return(

    <Button onClick={onClick} isDisabled={isDisabled}>

        {renderArrow === 'left' && <LeftArrowIcon />}

        <span>{innerText}</span>

        {renderArrow === 'right' && <RightArrowIcon />}

    </Button>

  );

}

export default NavigationButton;