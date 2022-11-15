import SelectBoxOption from '../SelectBoxOption';

export default interface SelectBox{
    title: string;
    options: SelectBoxOption[] | undefined;
    renderColorBar?: boolean;
}