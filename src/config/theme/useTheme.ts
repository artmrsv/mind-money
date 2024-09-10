import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';
import { useContext } from 'react';

interface UseThemeResult {
  toggleTheme: () => void;
  mode?: Theme;
}

export function useTheme(): UseThemeResult {
  const { mode, toggleColorMode } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = mode === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    toggleColorMode(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    mode,
    toggleTheme
  };
}
