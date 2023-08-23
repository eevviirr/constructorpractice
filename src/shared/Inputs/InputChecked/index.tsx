import { FC, useEffect, useState } from "react";
import { CheckedButton } from "../../Buttons/CheckedButton";
import { IInputDefaultProps } from "./InputDefaultInterface";

const InputChecked: FC<IInputDefaultProps> = ({
    name,
    type,
    checked = false,
    maxLength,
    placeholder,
    handleChange,
    disabled,
    valueInp,
}) => {
    const [status, setStatus] = useState(false);
    const [value, setValue] = useState("");

    const change = (e: any) => {
        if (checked) {
            if (value.length > 5) {
                setStatus(true);
            } else {
                setStatus(false);
            }
        }
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
            {checked && (
                <div className="absolute top-1/2 -translate-y-1/2 right-0">
                    <CheckedButton
                        checked={status}
                        setChecked={() => setStatus(!status)}
                    />
                </div>
            )}
        </div>
    );
};
export { InputChecked };
