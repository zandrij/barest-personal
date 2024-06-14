'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useWindowSize } from "@uidotdev/usehooks";
import { useMenuStore } from "@/presentation/stores/menu-store";

import Logo from "@/assets/logos/logo.png";
import { HamburguerMenu } from "../shared/hamburguer-menu";

import { usePathname } from "next/navigation";
import { menuOptions } from "@/presentation/utils/MenuOptions";

export const Sidebar = () => {

    const width = useWindowSize().width!;
    const pathname = usePathname();

    const menu = useMenuStore(state => state.visible);
    const setMenu = useMenuStore(state => state.setVisible);

    const [initial, setInitial] = useState<number | null>(null);
    
    const routeValues: { [key in string]?: number } = {
        '/home': 0,
        '/marketplace?type=products': 1,
        '/jobs': 2,
        '/business': 3,
        '/distributors': 4,
        '/messages': 5,
        '/profile': 6
    };

    useEffect(() => {
        setInitial(routeValues[pathname] ?? null);
    },[pathname]);

    return (
        <nav className={`w-[304px] min-h-screen box-border px-8 border-r border-[--grayE0] font-[Lato] 
            max-[990px]:w-full 
            max-[990px]:overflow-hidden
            max-[990px]:h-[60px]
            max-[990px]:min-h-[60px]
            max-[990px]:bg-[--white]
            ${menu && 'open-main'}
        `}>
            <div className="flex items-center my-8 max-[990px]:my-[1rem] max-[990px]:flex max-[990px]:justify-between">
                <Image 
                    src={Logo} 
                    className="max-w-[138px]" 
                    priority 
                    alt="logo-sidebar"
                    width={width <= 990 ? 100 : 138}
                    height={width <= 990 ? 32 : 29.05}
                />
                <HamburguerMenu onClick={() => setMenu(!menu)} />
            </div>
            <ul className="flex-col flex gap-[10px] max-[990px]:mt-[30px]">
                {menuOptions.map((option, i) => (
                    <li key={i}>
                        <Link
                            href={option.url}
                            className={`gap-[10px] flex items-center py-3 px-4 rounded-xl text-xl text-[--gray42] font-semibold item-sidebar 
                                ${initial === i && 'active'}
                            `}
                            onClick={() => setInitial(i)}
                        >
                            {<option.icon  />}
                            <span className="text-base">{option.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
