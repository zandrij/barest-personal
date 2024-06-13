'use client'
import { useState } from "react";
import { SelectSimple } from "@/presentation/components/shared/form/select-simple";
import { OptionsFilter } from "../utils/filter-options";
import { InputSimple } from "@/presentation/components/shared/form/input-simple";
import { CapFirstLetter } from "@/presentation/utils/CapFirstLetter";
import { ButtonSimple } from "@/presentation/components/shared/form/button-simple";
import { FiSearch } from "react-icons/fi";
import { useWindowSize } from "@uidotdev/usehooks";

export const HeadFilter = () => {

    const [initialSearch, setInitialSearch] = useState('Productos');
    const width = useWindowSize().width!;

    return (
        <article className="w-full rounded-2xl px-6 pb-7 pt-5 bg-[--darkpurple] flex flex-col items-center">
            <h2 className="text-xl font-bold font-[Sora] text-[--white] block w-full my-3">¿Qué estas buscando?</h2>
            <form action="" className="gap-4 flex sm:flex-row flex-col w-full">
                <SelectSimple 
                    options={OptionsFilter}
                    style={{ maxWidth: width <= 640 ? '100%' : 154}}
                    value="Productos"
                    onChange={setInitialSearch}
                />
                <InputSimple 
                    placeholder={CapFirstLetter(`Buscar ${initialSearch}...`)} 
                    style={{ flexGrow: 1 }}
                />
                <ButtonSimple label="Buscar" icon={<FiSearch />} rounded />
            </form>
        </article>
    )
};