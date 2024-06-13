"use client";
import { FC, useState } from "react";
import type { IconType } from "react-icons";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  label?: string;
  value?: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  placeholder?: string;
  onClick?: (e: any) => void;
  style?: React.CSSProperties;
  arrowIcon?: boolean;
  startIcon?: IconType | any
}

export const SelectClick: FC<Props> = ({
  label,
  value,
  required = false,
  error = false,
  errorMessage,
  placeholder,
  onClick,
  style,
  arrowIcon = false,
  startIcon
}) => {
    const [inputValue, setInputValue] = useState(value);

    const selectValue = (value: any) => {
        if (value.name) {
            setInputValue(value.name);
        }
    };

    const inputBody = "w-full relative flex items-center font-[Lato] cursor-pointer text-base text-[--gray21]";
    const input = "w-full min-h-10 cursor-pointer rounded-xl outline-none border border-[--grayE0] placeholder:text-[--gray9E] pr-10 pl-3";

    return (
        <div className={`min-w-24 flex-col w-full cursor-pointer`} onClick={onClick} style={style}>
            {/* label */}
            {label && (<label className="block font-semibold text-sm mt-1 mb-1 text-[--gray61] font-[Lato]">
                {label} {required && <span className="text-[--danger]">*</span>}
            </label>)}
            {/* input */}
            <div className="w-full relative flex items-center">
                {/* startIcon */}
                {startIcon && (
                    <div className="absolute left-3 w-4 h-4 text-[--gray42] text-base z-[1]">
                        {startIcon}
                    </div>
                )}
                {/* input body */}
                <div className={`${inputBody}`}>
                    <input
                        type="text"
                        className={`${input} ${error && "border-[--danger]"} ${startIcon && " pl-8"}`}
                        placeholder={placeholder}
                        required={required}
                        defaultValue={inputValue}
                        readOnly
                    />
                    {/* icon */}
                    {arrowIcon && (
                        <div className={`absolute right-3 w-4 h-4 text-[--gray42] transition-all duration-200`}>
                            {<BsChevronDown size={16} />}
                        </div>
                    )}
                </div>
            </div>
            {/* error text */}
            {error && (
                <small className="block text-sm font-normal font-[Lato] text-[--danger] my-1">
                    {errorMessage}
                </small>
            )}
        </div>
    );
};
