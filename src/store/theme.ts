import create from 'zustand';

interface ThemeState {
  theme: 'ciclo' | 'weather';
  toggleTheme: () => void;
}
export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'ciclo',
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === 'ciclo' ? 'weather' : 'ciclo' })),
}));
