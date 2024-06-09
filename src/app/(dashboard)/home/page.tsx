import { HeadHome, SelectSimple } from "@/presentation";
import style from "@/presentation/modules/home/styles/home.module.scss";

export default async function Home() {
    return (
        <article className={`${style.homeBody} min-h-full`}>
            <section className={style.homeLeft}>
                <HeadHome />

                <div className="w-80">
                    <SelectSimple 
                        label="Input prueba" 
                        required 
                        placeholder="Input placeholder"
                        options={[
                            {id: 1, name: 'prueba 1'},
                            {id: 2, name: 'prueba 2'},
                            {id: 3, name: 'prueba 3'},
                            {id: 4, name: 'prueba 4'},
                            {id: 5, name: 'prueba 5'},
                            {id: 6, name: 'prueba 6'},
                            {id: 7, name: 'prueba 7'},
                        ]}
                    />
                </div>
            </section>
            <section className={style.homeAds}>
            </section>
        </article>
    );
};