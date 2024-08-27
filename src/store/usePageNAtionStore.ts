import { create } from 'zustand';

type store = {
  clickMethod: number;
  setClickMethods: (clickMethod: number) => void;
};

export const usePageNationStore = create<store>()((set) => ({
  clickMethod: 1,
  setClickMethods: (arg) => set({ clickMethod: arg }),
}));
