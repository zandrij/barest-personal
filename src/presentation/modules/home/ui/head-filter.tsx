'use client'
import { useState } from "react";
import { SelectSimple } from "@/presentation/components/shared/form/select-simple";
import { OptionsFilter } from "../utils/filter-options";
import { InputSimple } from "@/presentation/components/shared/form/input-simple";
import { CapFirstLetter } from "@/presentation/utils/CapFirstLetter";
import { ButtonSimple } from "@/presentation/components/shared/form/button-simple";
import { FiSearch } from "react-icons/fi";

export const HeadFilter = () => {

    const [initialSearch, setInitialSearch] = useState('Productos');

    return (
        <article className="w-full rounded-2xl px-6 pb-7 sm:mt-0 mt-4 pt-5 bg-[--darkpurple] flex flex-col items-center">
            <h2 className="text-xl font-bold font-[Sora] text-[--white] block w-full my-3">¿Qué estas buscando?</h2>
            <form action="" className="gap-4 flex sm:flex-row flex-col w-full">
                <SelectSimple 
                    options={OptionsFilter}
                    value="Productos"
                    onChange={setInitialSearch}
                    className="sm:max-w-[154px] w-full h-10"
                    size="large"
                />
                <InputSimple 
                    placeholder={CapFirstLetter(`Buscar ${initialSearch}...`)} 
                    style={{ flexGrow: 1 }}
                    size="large"
                />
                <ButtonSimple label="Buscar" icon={<FiSearch />} rounded size="large" />
            </form>
        </article>
    )
};