import Clickable from '../Clickable';

export default interface NavigationButton extends Clickable {
    innerText?: string;
    isDisabled?: boolean;
    renderArrow?: string;
  }