import { MouseEventHandler } from "react";

export default interface FilterOption {
    innerText?: string | undefined;
    isSelected: boolean;
    onClick?: MouseEventHandler;
    handleResetPage?: () => void;
}