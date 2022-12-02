import Filter from "../Filter";

export default interface FilterArea extends Filter {
    handleResetPage?: () => void;
}