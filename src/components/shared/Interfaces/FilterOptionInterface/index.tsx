import { MouseEventHandler } from "react";

export interface FilterOptionInterface {
    innerText?: string | undefined;
    isSelected: boolean;
    onClick?: MouseEventHandler;
    handleResetPage?(): any;
}