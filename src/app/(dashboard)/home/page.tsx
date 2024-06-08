import { HeadHome, SelectSimple } from "@/presentation";
import style from "@/presentation/modules/home/styles/home.module.scss";

export default function Home() {
    return (
        <article className={`${style.homeBody} min-h-full`}>
            <section className={style.homeLeft}>
                <HeadHome />

                <div style={{ maxWidth: 400 }}>
                    <SelectSimple 
                        label="Input prueba" 
                        required 
                        placeholder="Input placeholder"
                        options={[
                            {id: 1, name: 'prueba 1'},
                            {id: 2, name: 'prueba 2'},
                            {id: 3, name: 'prueba 3'}
                        ]}
                    />
                </div>

            </section>
            <section className={style.homeAds}>
                
            </section>
        </article>
    );
};