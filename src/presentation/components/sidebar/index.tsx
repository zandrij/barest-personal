'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useWindowSize } from "@uidotdev/usehooks";
import { useMenuStore } from "@/presentation/stores/menu-store";

import Logo from "@/assets/logos/logo-svg.svg";
import { HamburguerMenu } from "../shared/hamburguer-menu";
import { PiHouse } from 'react-icons/pi';
import { CiDeliveryTruck } from "react-icons/ci";
import { IoChatboxEllipsesOutline, IoPersonOutline } from "react-icons/io5";
import MarketplaceIcon from "@/presentation/utils/MarketplaceIcon";
import JobsIcon from "@/presentation/utils/JobsIcon";
import BusinessIcon from "@/presentation/utils/BusinessIcon";
import { usePathname } from "next/navigation";

interface Options {
    name: string;
    icon: any;
    url: string;
}

export const Sidebar = () => {

    const width = useWindowSize().width!;

    const menu = useMenuStore(state => state.visible);
    const setMenu = useMenuStore(state => state.setVisible);

    const [initial, setInitial] = useState<number | null>(null);
    const [options] = useState<Options[]>([
        {
            name: "Inicio",
            icon: PiHouse,
            url: "/home",
        },
        {
            name: "Marketplace",
            icon: MarketplaceIcon,
            url: "/marketplace",
        },
        {
            name: "Empleos",
            icon: JobsIcon,
            url: "/jobs",
        },
        {
            name: "Negocios",
            icon: BusinessIcon,
            url: "/business",
        },
        {
            name: "Distribuidores",
            icon: CiDeliveryTruck,
            url: "/distributors",
        },
        {
            name: "Mensajes",
            icon: IoChatboxEllipsesOutline,
            url: "/messages",
        },
        {
            name: "Perfil",
            icon: IoPersonOutline,
            url: "/profile",
        },
    ]);

    const pathname = usePathname();

    useEffect(() => {
        switch (pathname) {
            case '/home':
                setInitial(0)
            break;
            case '/marketplace':
                setInitial(1)
            break;
            case '/jobs':
                setInitial(2)
            break;
            case '/business':
                setInitial(3)
            break;
            case '/distributors':
                setInitial(4)
            break;
            case '/messages':
                setInitial(5)
            break;
            case '/profile':
                setInitial(6)
            break;
            default:
                setInitial(null)
            break;
        }
    },[]);

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
                    className="max-w-[253px] min-h-8 max-h-8" 
                    priority 
                    alt="logo-sidebar"
                    width={width <= 990 ? 100 : 153}
                    height={width <= 990 ? 32 : 32}
                />
                <HamburguerMenu onClick={() => setMenu(!menu)} />
            </div>
            <ul className="flex-col flex gap-[10px] max-[990px]:mt-[30px]">
                {options.map((option, i) => (
                    <li key={i}>
                        <Link
                            href={option.url}
                            className={`gap-[10px] flex items-center py-3 px-4 rounded-xl text-base text-[--gray42] font-semibold item-sidebar 
                                ${initial === i && 'active'}
                            `}
                            onClick={() => setInitial(i)}
                        >
                            {<option.icon/>}
                            <span>{option.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
  );
};
