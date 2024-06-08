'use client'
import Image from "next/image";
import Link from "next/link";
import style from "./index.module.scss";

import Logo from "@/assets/logos/logo-svg.svg";
import { HamburguerMenu } from "../shared/hamburguer-menu";
import { useWindowSize } from "@uidotdev/usehooks";
import { useMenuStore } from "@/presentation/stores/menu-store";



export const Sidebar = () => {

    const width = useWindowSize().width!;

    const initial = useMenuStore(state => state.initial);
    const menu = useMenuStore(state => state.visible);
    const setMenu = useMenuStore(state => state.setVisible);
    const setInitial = useMenuStore(state => state.setInitial);
    const options = useMenuStore(state => state.options);

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
