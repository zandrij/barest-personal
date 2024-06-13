import { FC } from "react";

interface Props {
  label: string;
  size?: "small" | "normal" | "large";
  bgColor?: string,
  color?: string,
  rounded?: boolean,
  icon?: any,
  style?: React.CSSProperties,
  className?: string
}

export const ButtonSimple: FC<Props> = ({ 
    label, 
    size = "normal", 
    bgColor = '--orange', 
    color = '#fff', 
    rounded = false,
    icon,
    style,
    className
}) => {
    return (
        <button
            className={`bg-[${bgColor}] text-[${color}] block
                ${size === "small" && "px-[8px] py-3"}
                ${size === "normal" && "px-4 py-[10px] rounded-xl h-10"}
                ${size === "large" && "px-[14px] py-5"}
                ${rounded && "rounded-[100px]"}
                ${className}
            `}
            style={style}
         >
            <span className={`justify-center m-auto font-bold font-[Lato] text-[--white] flex gap-2 items-center
                ${size === "small" && " text-sm"}
                ${size === "normal" && " text-sm"}
                ${size === "large" && " text-lg"}
            `}>
                {icon && (<span className="text-xl">{icon}</span>)}
                {label}
            </span>
        </button>
    );
};
