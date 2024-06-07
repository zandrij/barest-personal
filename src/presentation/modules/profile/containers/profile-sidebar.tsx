import { FC } from "react";
import style from "../styles/profile-sidebar.module.scss";

export const ProfileSidebar:FC<any> = () => {
    return (
        <section className={`${style.boxProfile} min-h-screen`}>
            <article className={style.headBox}>
                <h1>Perfil</h1>
            </article>
        </section>
    );
};