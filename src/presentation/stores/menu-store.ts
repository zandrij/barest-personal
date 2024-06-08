import { create } from "zustand";
import { PiHouse } from 'react-icons/pi';
import MarketplaceIcon from "../utils/MarketplaceIcon";
import JobsIcon from "../utils/JobsIcon";
import BusinessIcon from "../utils/BusinessIcon";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoChatboxEllipsesOutline, IoPersonOutline } from "react-icons/io5";

interface Options {
    name: string;
    icon: any;
    url: string;
}

type State = {
    visible: boolean;
    initial: number;
    options: Options[]
};

type Actions = {
    setVisible: (e: boolean) => void;
    setInitial: (e: number) => void;
};

export const useMenuStore = create<State & Actions>((set, get) => ({
    visible: false,
    initial: 0,
    setVisible: (e) => set({ visible: e }),
    setInitial: (num) => set({ initial: num }),
    options: [
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
    ]
}));
