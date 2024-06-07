import { FC } from "react";
import style from "./index.module.scss";

export const HamburguerMenu: FC<{ onClick: () => void }> = ({ onClick }) => {
    return (
        <div className={style.menu}>
            <input
                type="checkbox"
                id="checkbox3"
                onChange={onClick}
                className={`${style.checkbox3} ${style.visuallyHidden}`}
            />

            <label htmlFor="checkbox3">
                <div className={`${style.hamburger} ${style.hamburger3}`}>
                    <span className={`${style.bar} ${style.bar1}`}></span>
                    <span className={`${style.bar} ${style.bar2}`}></span>
                    <span className={`${style.bar} ${style.bar3}`}></span>
                    <span className={`${style.bar} ${style.bar4}`}></span>
                </div>
            </label>
        </div>
    );
};
