"use client";
import { FC, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

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
  style?: React.CSSProperties
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
  style
}) => {
    return (
        <div className={`min-w-24 flex-col w-full cursor-pointer`} style={style}>
            {/* label */}
            <label className="block font-semibold text-sm mt-1 mb-1 text-[--gray61] font-[Lato]">
                {label} {required && <span className="text-[--danger]">*</span>}
            </label>
            {/* input */}
            <div className="w-full relative flex items-center">
                {/* input body */}
                <div
                    className="w-full relative flex items-center font-normal font-[Lato] cursor-pointer text-base text-[--gray21]"
                >
                    <input
                        type="text"
                        className={`w-full h-12 cursor-pointer rounded-xl outline-none border border-[--grayBD] placeholder:text-[--gray9E] pr-10 pl-3
                            ${error && "border-[--danger]"}
                             placeholder:first-letter:uppercase
                        `}
                        placeholder={placeholder}
                        required={required}
                        defaultValue={value}
                        onChange={onChange}
                        onKeyUp={onKeyUp}
                        onKeyDown={onKeyDown}
                    />
                    {/* icon */}
                    {/* <div className="absolute right-3 w-4 h-4 text-[--gray42] transition-all duration-200">
                        {<BsChevronDown size={16} />}
                    </div> */}
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
