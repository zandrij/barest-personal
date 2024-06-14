"use client";
import { FC, useEffect, useState } from "react";
import { InputSimple } from "@/presentation/components/shared/form/input-simple";
import { SelectClick } from "@/presentation/components/shared/form/select-click";
import { ButtonSimple } from "@/presentation/components/shared/form/button-simple";
import { FiSearch } from "react-icons/fi";
import { PiListDashes } from "react-icons/pi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getCategories } from "../actions/filter-marketplace";

interface Props {
}

export const HeadFilterMarketplace: FC<Props> = ({  }) => {
    const [options] = useState([{ name: "Productos" }, { name: "Servicios" }]);
    const [active, setActive] = useState(0);
    const searchParams = useSearchParams();
    const typeParam = searchParams.get('type');

    const btnBody = "h-11 w-[132px] rounded-xl flex items-center relative font-semibold group";
    const btnHover = "hover:bg-[--orangeLight] hover:text-[--orange]";
    const btnTransition = "transition-all duration-200";
    const btnActive = "bg-[--orangeLight] text-[--orange] font-[800!important]";
    const barBase = "w-12 h-[2px] bg-[--orange] absolute m-auto left-[0] right-[0] bottom-[7px] rounded-[12px]";
    const barActive = `${barBase} ${btnActive} ${btnTransition}`;
    const barHover = `${barBase} group-hover:block hidden ${btnTransition}`;

    useEffect(() => {
        if (typeParam) {
            if (typeParam === "products") {
                if (active !== 1) setActive(0);
            } else if (typeParam === "services") setActive(1);
            getCategories(typeParam)
        }
    }, [typeParam]);

    const pathname = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set("type", active === 0 ? 'products' : 'services');

        replace(`${pathname}?${params.toString()}`);
    },[active]);

    return (
        <article className="bg-[--white] p-4 rounded-xl mt-7 shadow-custom flex flex-col gap-4">
            <section className="flex flex-row gap-1 sm:justify-start justify-center">
                {options.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`${btnBody} ${btnHover} ${btnTransition} ${active === i && btnActive}`}
                    >
                        <span className="text-base font-[Lato] m-auto">
                            {item.name}
                        </span>
                        <span className={`${active === i ? barActive : barHover}`} />
                    </button>
                ))}
            </section>

            <section className="flex sm:flex-row flex-col gap-3 items-center">
                <InputSimple 
                    placeholder="Buscar servicios..." 
                    startIcon={<FiSearch color="var(--gray42)" />} 
                    grayInput
                />
                <SelectClick 
                    placeholder="Categorías" 
                    startIcon={<PiListDashes color="var(--gray42)" />}
                    arrowIcon 
                />
                <SelectClick 
                    placeholder="En todo España" 
                    startIcon={<HiOutlineLocationMarker color="var(--gray42)" />}
                    arrowIcon
                />
                <ButtonSimple label="Buscar" className="w-full sm:max-w-[106px]" />
            </section>
        </article>
    );
};


