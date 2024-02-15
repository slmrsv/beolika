import { create } from 'zustand';

interface ModeStore {
  isArtMode: boolean;
  setIsArtMode: () => void;
}

export const modeStore = create<ModeStore>((set) => ({
  isArtMode: false,
  setIsArtMode: () => set((state) => ({ isArtMode: !state.isArtMode })),
}));

interface MenuStore {
  isMenuOpen: boolean;
  setIsMenuOpen: () => void;
}

export const menuStore = create<MenuStore>((set) => ({
  isMenuOpen: false,
  setIsMenuOpen: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));