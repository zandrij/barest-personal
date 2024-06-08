"use client";
import { FC, useState } from "react";
import style from "./index.module.scss";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  name?: string;
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
}

export const SelectSimple: FC<Props> = ({
    name,
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
}) => {
    const [show, setShow] = useState(false);

    return (
        <div className={style.inputBody}>
            <label htmlFor={name} className={style.label}>
                {label} {required && <span>*</span>}
            </label>
        <div className={style.inputSub} onClick={() => setShow(!show)}>
            <input
                type="text"
                className={`${style.input} ${style.error}`}
                placeholder={placeholder}
                required={required}
                value={value}
                onChange={onChange}
                onKeyUp={onKeyUp}
                onKeyDown={onKeyDown}
                readOnly
            />
            <div className={style.icon}>{<BsChevronDown />}</div>

            <div
                className={style.listSelect}
                style={{
                    maxHeight: show ? "200px" : 0,
                    overflowY: show ? "auto" : "hidden",
                }}
            >
                <ul>
                    {options.map((item, i) => (
                        <li key={i}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </div>
            {error && <small className={style.message}>{errorMessage}</small>}
        </div>
    );
};
