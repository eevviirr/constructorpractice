import { FC, useEffect, useState } from "react";
import { IInputDefaultProps } from "./InputDefaultInterface";

const InputDefault: FC<IInputDefaultProps> = ({
    name,
    type,
    maxLength,
    placeholder,
    handleChange,
    disabled,
    valueInp,
}) => {
    const [value, setValue] = useState("");

    const change = (e: any) => {
        setValue(e.target.value);
        handleChange;
    };
    useEffect(() => {
        change;
    }, [value]);

    return (
        <div className="relative">
            <input
                disabled={disabled}
                name={name}
                type={type}
                maxLength={maxLength}
                className={`text-[16px] text-[#999] not-italic font-medium capitalize tracking-[-1.2px] bg-[#E7E7E7] rounded-2xl h-[50px] w-full indent-2.5`}
                placeholder={placeholder}
                value={value || valueInp}
                onChange={change}
            />
        </div>
    );
};
export { InputDefault };
