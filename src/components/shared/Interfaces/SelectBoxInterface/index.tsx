import { SelectBoxOptionInterface } from '../SelectBoxOptionInterface';

export interface SelectBoxInterface{
    title: string;
    options: SelectBoxOptionInterface[] | undefined;
    renderColorBar?: boolean;
}