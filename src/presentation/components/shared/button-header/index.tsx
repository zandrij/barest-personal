'use client'
import { FC } from "react";
import style from "./index.module.scss";

interface Props {
    text: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    icon?: any;
}

export const ButtonHeader: FC<Props> = ({
    text,
    disabled = false,
    loading = false,
    onClick,
    icon,
}) => {
    return (
        <button
            className={style.buttonHeader}
            onClick={() => {
                onClick ? onClick() : null
            }}
            style={{ gap: icon ? 6 : 0 }}
        >
            {icon}
            {text}
        </button>
    );
};
