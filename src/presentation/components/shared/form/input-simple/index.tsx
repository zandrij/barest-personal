"use client";
import { FC } from "react";
import { IconType } from "react-icons";

interface Props {
  label?: string;
  value?: string;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  onKeyUp?: (e: any) => void;
  onKeyDown?: (e: any) => void;
  style?: React.CSSProperties,
  startIcon?: IconType | any,
  grayInput?: boolean
}

export const InputSimple: FC<Props> = ({
  label,
  value,
  required = false,
  error = false,
  errorMessage,
  placeholder,
  onChange,
  onKeyDown,
  onKeyUp,
  style,
  startIcon,
  grayInput
}) => {

    const inputBody = "w-full relative flex items-center font-normal font-[Lato] text-base text-[--gray21]";
    const input = "w-full h-10 rounded-xl outline-none border border-[--grayE0] placeholder:text-[--gray9E] pr-10 pl-3";
    const inputPlaceholder = "placeholder:first-letter:uppercase";
    const gray = "bg-[--grayF5] border-[--grayF5] font-[--gray9E]";

    return (
        <div className={`min-w-24 flex-col w-full p-0`} style={style}>
            {/* label */}
            {label && (<label className="block font-semibold text-sm mt-1 mb-1 text-[--gray61] font-[Lato]">
                {label} {required && <span className="text-[--danger]">*</span>}
            </label>)}
            {/* input */}
            <div className={`w-full relative flex items-center rounded-xl`}>
                {/* startIcon */}
                    {startIcon && (
                        <div className="absolute left-3 w-4 h-4 text-[--gray42] text-base z-[1]">
                            {startIcon}
                        </div>
                    )}
                {/* input body */}
                <div className={`${inputBody} ${grayInput && gray} rounded-xl`}>
                    <input
                        type="text"
                        className={`${input} ${error && "border-[--danger]"} ${grayInput && gray} ${inputPlaceholder} ${startIcon && " pl-8"}`}
                        placeholder={placeholder}
                        required={required}
                        defaultValue={value}
                        onChange={onChange}
                        onKeyUp={onKeyUp}
                        onKeyDown={onKeyDown}
                    />
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
