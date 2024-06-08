'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./index.module.scss";

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
        <nav className={`${style.sidebar} ${menu && style.openMain}`}>
            <div className={style.boxImage}>
                <Image 
                    src={Logo} 
                    className={style.logo} 
                    priority 
                    alt="logo-sidebar"
                    width={width <= 990 ? 100 : 153}
                    height={width <= 990 ? 32 : 32}
                />
                <HamburguerMenu onClick={() => setMenu(!menu)} />
            </div>
            <ul className={`${style.menuItems}`}>
                {options.map((option, i) => (
                    <li key={i}>
                        <Link
                            href={option.url}
                            className={`${style.buttonSide} ${initial === i && style.active}`}
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
