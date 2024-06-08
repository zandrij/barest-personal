'use client'
import { FC } from "react";
import style from "./index.module.scss";
import { LuSearch } from "react-icons/lu";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface Props {
    placeholder: string,
    value?: string,
    onClick?: () => void
}

export const InputHeader: FC<Props> = ({
    placeholder,
    value,
    onClick
}) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleValue = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        value ? params.set("search", value) : params.delete("search");

        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className={style.inputHeader}>
            <input 
                type="text" 
                placeholder={placeholder}
                value={value} 
                onChange={(event) => handleValue(event.target.value)}
                defaultValue={searchParams.get('search')?.toString()}
            />
            <span className={style.separator} />
            <button onClick={onClick} type="button" className={style.button}>
                <LuSearch size={16} />
            </button>
        </div>
    );
};