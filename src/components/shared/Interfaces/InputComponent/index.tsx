export default interface InputComponent {
    title?: string;
    placeholder?: string;
    onSubmitEvent?: (inputValue: string) => void;
}