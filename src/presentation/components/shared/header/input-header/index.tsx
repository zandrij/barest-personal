'use client'
import { FC } from "react";
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
        <div className="flex-grow relative flex items-center font-[Lato]">
            <input 
                className="w-full h-10 rounded-xl outline-none p-3 text-sm font-semibold border-[1px] border-[--grayE0] placeholder:text-[--gray9E]"
                type="text" 
                placeholder={placeholder}
                value={value} 
                onChange={(event) => handleValue(event.target.value)}
                defaultValue={searchParams.get('search')?.toString()}
            />
            <span className="block w-[.5px] h-[26px] bg-[--grayE0] absolute right-[50px]" />
            <button onClick={onClick} type="button" className=" w-[26px] h-[26px] bg-[--orange] rounded-lg flex items-center absolute right-3">
                <LuSearch size={16} color="var(--white)" className="m-auto" />
            </button>
        </div>
    );
};