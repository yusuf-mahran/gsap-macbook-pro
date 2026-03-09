import { create } from 'zustand';

interface Store {
  color: string;
  setColor: (color: string) => void;

  scale: number;
  setScale: (scale: number) => void;

  reset: () => void;
}

const useMacbookStore = create<Store>((set) => ({
  color: '#2e2c2e',
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  reset: () => set({ color: '#2e2c2e', scale: 0.08 }),
}));

export default useMacbookStore;
