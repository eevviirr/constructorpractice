export interface IInputDefaultProps {
    name: string;
    type: string;
    maxLength?: number;
    placeholder?: string;
    handleChange?: (event: any) => void;
    disabled?: boolean;
    valueInp?: string;
};