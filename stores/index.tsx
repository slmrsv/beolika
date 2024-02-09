import { create } from 'zustand';

interface ModeStore {
  artMode: boolean;
  changeMode: () => void;
}

export const modeStore = create<ModeStore>((set) => ({
  artMode: false,
  changeMode: () => set((state) => ({ artMode: !state.artMode })),
}));