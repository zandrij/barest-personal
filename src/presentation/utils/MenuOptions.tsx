import MarketplaceIcon from "./MarketplaceIcon";
import JobsIcon from "./JobsIcon";
import BusinessIcon from "./BusinessIcon";
import { PiHouse } from 'react-icons/pi';
import { CiDeliveryTruck } from "react-icons/ci";
import { IoChatboxEllipsesOutline, IoPersonOutline } from "react-icons/io5";

interface Options {
    name: string;
    icon: any;
    url: string;
}

export const menuOptions: Options[] = [
    {
        name: "Inicio",
        icon: PiHouse,
        url: "/home",
    },
    {
        name: "Marketplace",
        icon: MarketplaceIcon,
        url: "/marketplace?type=products",
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
];