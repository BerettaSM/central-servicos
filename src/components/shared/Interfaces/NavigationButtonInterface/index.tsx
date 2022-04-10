import { MouseEventHandler } from 'react';

export interface NavigationButtonInterface {
    innerText?: string;
    onClick?: MouseEventHandler;
    isDisabled?: boolean;
    renderArrow?: string;
  }