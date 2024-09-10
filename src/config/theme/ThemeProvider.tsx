'use client'

import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";
import getTheme from "@/config/theme/index";
import { ThemeProvider } from "@mui/material/styles";
import { Colors } from "@/config/theme/palette";

const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [mode, setMode] = useState<Theme>(Theme.LIGHT);

  /*  useEffect(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    setMode(stored ? (stored as Theme) : Theme.LIGHT);
  }, []);*/

  const theme = React.useMemo(() => getTheme('light'), [mode]);

  const defaultProps = useMemo(
    () => ({
      mode: mode,
      toggleColorMode: setMode,
    }),
    [mode],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
