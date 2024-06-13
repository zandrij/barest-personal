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
  options: { id: number; name: string }[];
  style?: React.CSSProperties
}

export const SelectSimple: FC<Props> = ({
  label,
  value,
  required = false,
  error = false,
  errorMessage,
  placeholder,
  onChange,
  onKeyDown,
  onKeyUp,
  options,
  style
}) => {
    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const selectValue = (value: any) => {
        if(value.name) {
            setInputValue(value.name);
            onChange && onChange(value.name)
        } 
    };

    const onBlur = () => {
        setTimeout(() => {
            if (show) return setShow(false);
        }, 100);
    };

    return (
        <div className={`min-w-24 flex-col w-full cursor-pointer 
            ${show&& options.length < 5 ? 'min-h-[280px] h-fit' : show && options.length > 5 && 'min-h-[300px]'}
        `} style={style}>
            {/* label */}
            {label && (
                <label className="block font-semibold text-sm mt-1 mb-1 text-[--gray61] font-[Lato]">
                    {label} {required && <span className="text-[--danger]">*</span>}
                </label>
            )}
            {/* input */}
            <div className="w-full relative flex items-center">
                {/* input body */}
                <div
                    className="w-full relative flex items-center font-normal font-[Lato] cursor-pointer text-base text-[--gray21]"
                    onBlur={onBlur}
                    onClick={() => setShow(!show)}
                >
                    <input
                        type="text"
                        className={`w-full h-12 cursor-pointer rounded-xl outline-none border border-[--grayBD] placeholder:text-[--gray9E] pr-10 pl-3
                            ${error && "border-[--danger]"}
                        `}
                        placeholder={placeholder}
                        required={required}
                        defaultValue={inputValue}
                        onKeyUp={onKeyUp}
                        onKeyDown={onKeyDown}
                        readOnly
                    />
                    {/* icon */}
                    <div
                        className={`${
                        show && "rotate-180 transition-all duration-200"
                        } absolute right-3 w-4 h-4 text-[--gray42] transition-all duration-200`}
                    >
                        {<BsChevronDown size={16} />}
                    </div>
                </div>
                {/* options */}
                <div
                    className="w-full z-[1] absolute scroll-custom max-h-0 top-14 bg-[--white] overflow-hidden transition-all duration-200 rounded-xl shadow-custom mb-1"
                    style={{
                        maxHeight: show ? "200px" : 0,
                        overflowY: show && options.length > 5 ? "auto" : "hidden",
                    }}
                >
                    <ul className="w-full bg-[--white] font-[Lato] text-[--gray61] text-sm font-normal">
                        {options.map((item, i) => (
                            <li
                                key={i}
                                className="py-2 px-4 cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap hover:bg-[#c9c9c91a]"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    e.preventDefault()
                                    selectValue(item)
                                }}
                            >
                                {item.name}
                            </li>
                        ))}
                    </ul>
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
