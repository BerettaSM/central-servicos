import { MouseEventHandler } from "react";

export default interface Clickable {
    onClick?: MouseEventHandler;
}