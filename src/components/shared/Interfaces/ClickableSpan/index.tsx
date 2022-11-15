import { MouseEventHandler } from "react";
import InnerText from "../InnerText";

export default interface ClickableSpan extends InnerText {
    onClick?: MouseEventHandler;
}