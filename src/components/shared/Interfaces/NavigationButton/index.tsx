import { MouseEventHandler } from 'react';

export default interface NavigationButton {
    innerText?: string;
    onClick?: MouseEventHandler;
    isDisabled?: boolean;
    renderArrow?: string;
  }