"use client";
import { FC, useState } from "react";

interface Props {}

export const HeadFilterMarketplace: FC<Props> = ({}) => {
    const [options] = useState([{ name: "Productos" }, { name: "Servicios" }]);
    const [active, setActive] = useState(0);

    const btnBody = "h-11 w-[132px] rounded-xl flex items-center relative";
    const btnHover = "hover:bg-[--orangeLight] hover:text-[--orange]";
    const btnTransition = "transition-all duration-200";
    const btnActive = "bg-[--orangeLight] text-[--orange]";

    const barActive = "w-12 h-[2px] bg-[--orange] absolute m-auto left-[0] right-[0] bottom-[7px] rounded-[12px]";

    return (
        <article className="bg-[--white] p-4 rounded-xl mt-9 shadow-custom flex flex-col">
            <section className="flex flex-row gap-1">
                {options.map((item, i) => (
                    <button
                        onClick={() => setActive(i)}
                        className={`${btnBody} ${btnHover} ${btnTransition} ${active === i && btnActive}`}
                    >
                        <span className="text-lg font-semibold font-[Lato] m-auto">
                            {item.name}
                        </span>
                        <span className={`${active === i && barActive}`} />
                    </button>
                ))}
            </section>
        </article>
    );
};
