import { FC } from "react";
import style from "../styles/conversations.module.scss";

export const Conversations:FC<any> = () => {
    return (
        <section className={`${style.boxConversations} min-h-screen`}>
            <article className={style.headBox}>
                <h1>Mensajes</h1>
            </article>
            <article className={style.filterBox}></article>
        </section>
    );
};