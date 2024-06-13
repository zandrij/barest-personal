import { HeadFilter, HeadHome } from "@/presentation";

export default async function Home() {
    return (
        <article className="w-full min-h-full flex">
            <section className="w-full flex-grow lg:border-r lg:border-[--grayE0] px-8">
                <HeadHome />
                <HeadFilter />
            </section>
            <section className="lg:w-[285px] w-0 ">
            </section>
        </article>
    );
};