export default interface CallbackAuth {
    stringState: string;
    callback: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit?: () => void;
}