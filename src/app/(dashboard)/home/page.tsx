import { HeadHome, InputSimple } from "@/presentation";
import style from "@/presentation/modules/home/styles/home.module.scss";
import { Bs0Circle } from "react-icons/bs";

export default function Home() {
    return (
        <article className={`${style.homeBody} min-h-full`}>
            <section className={style.homeLeft}>
                <HeadHome />

                <div style={{ maxWidth: 400 }}>
                    <InputSimple 
                        label="Input prueba" 
                        required 
                        placeholder="Input placeholder" 
                        icon={<Bs0Circle />}
                        error
                        errorMessage="Error input"
                    />
                </div>

            </section>
            <section className={style.homeAds}>
                
            </section>
        </article>
    );
};