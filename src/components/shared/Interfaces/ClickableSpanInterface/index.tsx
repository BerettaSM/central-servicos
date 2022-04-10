import { MouseEventHandler } from "react";
import { InnerTextInterface } from "../InnerTextInterface";

export interface ClickableSpanInterface extends InnerTextInterface {
    onClick?: MouseEventHandler;
}