import { FC } from "react";

interface Props {
  label: string;
  size?: "small" | "normal" | "large";
  bgColor?: string,
  color?: string,
  rounded?: boolean,
  icon?: any
}

export const ButtonSimple: FC<Props> = ({ 
    label, 
    size = "normal", 
    bgColor = '--orange', 
    color = '#fff', 
    rounded = false,
    icon
}) => {
    return (
        <button
            className={`bg-[${bgColor}] text-[${color}] block
                ${size === "small" && "px-[8px] py-3"}
                ${size === "normal" && "px-4 py-[10px]"}
                ${size === "large" && "px-[14px] py-5"}
                ${rounded && " rounded-[100px]"}
            `}
         >
            <span className={`justify-center m-auto font-extrabold font-[Lato] text-[--white] flex gap-2 items-center
                ${size === "small" && " text-sm"}
                ${size === "normal" && " text-base"}
                ${size === "large" && " text-lg"}
            `}>
                <span className="text-xl">{icon}</span>
                {label}
            </span>
        </button>
    );
};
