import { FC } from "react";
import style from "./index.module.scss";
import { LuSearch } from "react-icons/lu";

interface Props {
    placeholder: string,
    value?: string,
    onClick?: () => void
}

export const InputHeader: FC<Props> = ({
    placeholder,
    value,
    onClick
}) => {
    return (
        <div className={style.inputHeader}>
            <input 
                type="text" 
                placeholder={placeholder}
                value={value} 
            />
            <span className={style.separator} />
            <button onClick={onClick} type="button" className={style.button}>
                <LuSearch size={16} />
            </button>
        </div>
    );
};