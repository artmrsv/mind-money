import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ThemeContextProps {
  mode?: Theme;
  toggleColorMode: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({ toggleColorMode: () => {} });

export const LOCAL_STORAGE_THEME_KEY = 'theme';
