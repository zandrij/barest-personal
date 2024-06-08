import { create } from "zustand";

type State = {
    visible: boolean;
    initial: number;
};

type Actions = {
    setVisible: (e: boolean) => void;
    setInitial: (e: number) => void;
};

export const useMenuStore = create<State & Actions>((set, get) => ({
    visible: false,
    initial: 0,
    setVisible: (e) => set({ visible: e }),
    setInitial: (num) => set({ initial: num })
}));
