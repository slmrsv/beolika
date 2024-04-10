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

interface WorkCursorStore {
  isWorkCursor: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsWorkCursor: (value: boolean) => void;
}

export const workCursorStore = create<WorkCursorStore>((set) => ({
  isWorkCursor: false,
  setIsWorkCursor: (value) => set(() => ({ isWorkCursor: value })),
}));