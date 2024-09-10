import { EnumColors } from "@/config/colors";
import { PaletteOptions } from "@mui/material";

export const Colors = {
  light: {
    primaryMain: EnumColors.text,
    primaryContrastText: EnumColors.lightGray,
    secondaryMain: EnumColors.gray,
    error: EnumColors.error,
    success: EnumColors.success,
    inherit: EnumColors.inherit,
    darkGray: EnumColors.darkGray,
    blue: EnumColors.blue,
    lightBlue: EnumColors.lightBlue,
  },
};

export const lightThemePalette: PaletteOptions = {
  primary: {
    main: Colors.light.primaryMain,
    light: Colors.light.primaryMain,
    contrastText: Colors.light.primaryContrastText,
  },
  secondary: {
    main: Colors.light.secondaryMain,
    light: Colors.light.primaryContrastText,
    contrastText: Colors.light.blue,
    dark: Colors.light.primaryMain,
  },
  neutral: {
    main: Colors.light.primaryMain,
    light: Colors.light.lightBlue,
    contrastText: Colors.light.primaryMain,
  },
  info: {
    main: Colors.light.primaryMain,
    light: Colors.light.primaryMain,
    dark: Colors.light.darkGray,
  },
  error: {
    main: Colors.light.error,
  },
  success: {
    main: Colors.light.success,
  },
};
