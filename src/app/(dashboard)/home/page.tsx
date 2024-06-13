import { ContentSeparator, HeadFilter, HeadHome } from "@/presentation";

export default async function Home() {
    return (
        <article className="w-full min-h-full flex">
            <section className="w-full flex-grow lg:border-r lg:border-[--grayE0] px-8">
                <HeadHome />
                <HeadFilter />

                <ContentSeparator title="Servicios urgentes" href="/home/urgent-ads" />
                <ContentSeparator title="Productos" href="/marketplace" />
                <ContentSeparator title="Negocios" href="/business" />
            </section>
            {/* <section className="lg:w-[285px] w-0 ">
            </section> */}
        </article>
    );
};