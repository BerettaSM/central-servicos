import InnerText from "../InnerText";
import Clickable from "../Clickable";

export default interface ClickableSpan extends InnerText, Clickable {
    isDisabled?: boolean;
}