import { FC } from "react";
import style from "./index.module.scss";

interface Props {
    title: string,
    search?: boolean,
    searchPlaceholder?: string,
    onClick?: () => void
}

export const HeaderLayout: FC<Props> = ({
    title,
    search = false,
    searchPlaceholder,
    onClick
}) => {
    return(
        <div className={style.headLayout}>
            <h1>{title}</h1>
            
        </div>
    )
};