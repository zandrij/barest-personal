'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./index.module.scss";

import Logo from "@/assets/logos/logo-svg.svg";
import { PiHouse } from "react-icons/pi";
import { IoChatboxEllipsesOutline, IoPersonOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
import MarketplaceIcon from "@/presentation/utils/MarketplaceIcon";
import JobsIcon from "@/presentation/utils/JobsIcon";
import BusinessIcon from "@/presentation/utils/BusinessIcon";
import { HamburguerMenu } from "../shared/hamburguer-menu";
import { useWindowSize } from "@uidotdev/usehooks";
import { useMenuStore } from "@/presentation/stores/menu-store";

interface Options {
  name: string;
  icon: any;
  url: string;
}

export const Sidebar = () => {

    const width = useWindowSize().width!;

    const initial = useMenuStore(state => state.initial);
    const menu = useMenuStore(state => state.visible);
    const setMenu = useMenuStore(state => state.setVisible);
    const setInitial = useMenuStore(state => state.setInitial);


    const [options] = useState<Options[]>([
        {
            name: "Inicio",
            icon: <PiHouse size={20} />,
            url: "/home",
        },
        {
            name: "Marketplace",
            icon: <MarketplaceIcon />,
            url: "/marketplace",
        },
        {
            name: "Empleos",
            icon: <JobsIcon />,
            url: "/jobs",
        },
        {
            name: "Negocios",
            icon: <BusinessIcon />,
            url: "/business",
        },
        {
            name: "Distribuidores",
            icon: <CiDeliveryTruck size={20} />,
            url: "/distributors",
        },
        {
            name: "Mensajes",
            icon: <IoChatboxEllipsesOutline size={20} />,
            url: "/messages",
        },
        {
            name: "Perfil",
            icon: <IoPersonOutline size={20} />,
            url: "/profile",
        },
    ]);

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
                            {option.icon}
                            <span>{option.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
  );
};
