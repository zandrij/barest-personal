import { HeadHome } from "@/presentation";
import style from "@/presentation/modules/home/styles/home.module.scss";

export default function Home() {
    return (
        <article className={`${style.homeBody} min-h-full`}>
            <section className={style.homeLeft}>
                <HeadHome />
            </section>
            <section className={style.homeAds}></section>
        </article>
    );
};