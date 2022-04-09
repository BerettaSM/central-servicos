import { MouseEventHandler } from 'react';

export interface NavigationBtn {
    innerText?: string;
    onClick?: MouseEventHandler;
    isDisabled?: boolean;
    renderArrow?: string;
  }