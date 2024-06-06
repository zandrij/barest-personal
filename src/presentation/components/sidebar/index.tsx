"use client";
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

interface Options {
  name: string;
  icon: any;
  url: string;
}

export const Sidebar = () => {
    const [initial, setInitial] = useState(0);
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
        <nav className={`${style.sidebar}`}>
            <div style={{ marginBottom: 30 }}>
                <Image src={Logo} width={114} height={24} priority alt="logo-sidebar" />
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
