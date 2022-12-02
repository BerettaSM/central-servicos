import Clickable from "../Clickable";

export default interface FilterOption extends Clickable {
    innerText?: string | undefined;
    isSelected: boolean;
    handleResetPage?: () => void;
}