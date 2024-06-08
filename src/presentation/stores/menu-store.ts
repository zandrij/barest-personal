import { create } from "zustand";

type State = {
    visible: boolean;
};

type Actions = {
    setVisible: (e: boolean) => void;
};

export const useMenuStore = create<State & Actions>((set, get) => ({
    visible: false,
    setVisible: (e) => set({ visible: e }),
}));
