import Link from "next/link";
import style from "./index.module.scss";
import Image from "next/image";

import HomeIcon from "@/assets/icons/sidebar/home-outline.png";
import HomeIconWhite from "@/assets/icons/sidebar/home-white.png";
import MarketplaceIcon from "@/assets/icons/sidebar/marketplace-outline.png";
import MarketplaceIconWhite from "@/assets/icons/sidebar/marketplace-white.png";
import JobsIcon from "@/assets/icons/sidebar/jobs-outline.png";
import JobsIconWhite from "@/assets/icons/sidebar/jobs-white.png";
import BusinessIcon from "@/assets/icons/sidebar/business-outline.png";
import BusinessIconWhite from "@/assets/icons/sidebar/business-white.png";
import DistributorsIcon from "@/assets/icons/sidebar/distributors-outline.png";
import DistributorsIconWhite from "@/assets/icons/sidebar/distributors-white.png";
import MessagesIcon from "@/assets/icons/sidebar/message-outline.png";
import MessagesIconWhite from "@/assets/icons/sidebar/message-white.png";
import ProfileIcon from "@/assets/icons/sidebar/profile-outline.png";
import ProfileIconWhite from "@/assets/icons/sidebar/profile-white.png";
import { useEffect, useState } from "react";

interface Options {
  name: string;
  icon: any;
  iconActive: any;
  url: string;
}

export const Sidebar = () => {
    const [initial, setInitial] = useState(0);
    const [options] = useState<Options[]>([
        {
            name: "Inicio",
            icon: HomeIcon,
            iconActive: HomeIconWhite,
            url: "/home",
        },
        {
            name: "Marketplace",
            icon: MarketplaceIcon,
            iconActive: MarketplaceIconWhite,
            url: "/marketplace",
        },
        {
            name: "Empleos",
            icon: JobsIcon,
            iconActive: JobsIconWhite,
            url: "/jobs",
        },
        {
            name: "Negocios",
            icon: BusinessIcon,
            iconActive: BusinessIconWhite,
            url: "/business",
        },
        {
            name: "Distribuidores",
            icon: DistributorsIcon,
            iconActive: DistributorsIconWhite,
            url: "/distributors",
        },
        {
            name: "Mensajes",
            icon: MessagesIcon,
            iconActive: MessagesIconWhite,
            url: "/messages",
        },
        {
            name: "Perfil",
            icon: ProfileIcon,
            iconActive: ProfileIconWhite,
            url: "/profile",
        },
    ]);

    return (
        <nav className={`${style.sidebar}`}>
            <ul className={`${style.menuItems}`}>
                {options.map((option, index) => (
                    <Link 
                        key={index}
                        href={option.url} 
                        onMouseEnter={() => setInitial(index)} 
                        className={`${style.buttonSide}`}
                    >
                        <Image
                            src={ initial === index ? option.iconActive : option.icon}
                            width={20}
                            height={20}
                            className={style.icon}
                            alt={`${option.name}-icon`}
                        />
                        <span>{option.name}</span>
                    </Link>
                ))}
            </ul>
        </nav>
    );
};