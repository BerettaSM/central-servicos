import { FilterInterface } from "../FilterInterface";

export interface FilterAreaInterface extends FilterInterface {
    handleResetPage?(): any;
}