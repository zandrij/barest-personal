"use client";
import { FC } from "react";

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
            className={`w-fit py-[10px] px-5 max-h-10 flexitems-center rounded-xl border-[1px] border-[--darkpurple] transition-all duration-200 text-[--darkpurple] hover:bg-[--darkpurple] hover:text-[--white] hover:duration-200 hover:transition-all`}
            onClick={() => {onClick ? onClick() : null }}
        >
            <span className={`${icon && "gap-1"} font-[Lato] m-auto flex text-sm font-bold`}>
                {icon} {text}
            </span>
        </button>
    );
};
