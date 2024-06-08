"use client";
import { FC } from "react";
import style from "./index.module.scss";

interface Props {
    name?: string;
    label?: string;
    value?: string;
    required?: boolean;
    error?: boolean;
    errorMessage?: string;
    placeholder?: string;
    onChange?: (e:any) => void;
    onKeyUp?: (e:any) => void;
    onKeyDown?: (e:any) => void;
    icon?: any;
}

export const InputSimple: FC<Props> = ({
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
    icon
}) => {
    return (
        <div className={style.inputBody}>
            <label htmlFor={name} className={style.label}>
                {label} {required && <span>*</span>}
            </label>
            <div className={style.inputSub}>
                {icon && (<div className={style.icon}>{icon}</div>)}
                <input
                    type="text"
                    className={`${style.input} ${style.error}`}
                    style={{ paddingLeft: icon && 40 }}
                    placeholder={placeholder}
                    required={required}
                    value={value}
                    onChange={onChange}
                    onKeyUp={onKeyUp}
                    onKeyDown={onKeyDown}
                />
            </div>
            {error && <small className={style.message}>{errorMessage}</small>}
        </div>
    );
};
