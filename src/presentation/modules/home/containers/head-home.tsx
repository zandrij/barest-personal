import { FC } from "react";
import style from "../styles/head-home.module.scss";

export const HeadHome:FC<any> = () => {
    return(
        <div className={style.headHome}>
            <h1>Todo sobre hostelería, en un solo lugar 👋</h1>
        </div>
    );
};