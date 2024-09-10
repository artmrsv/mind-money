import { createTheme } from "@mui/material/styles";
import { components } from "@/config/theme/components";
import { lightThemePalette } from "@/config/theme/palette";
import React from "react";
import { Manrope, Inter } from "next/font/google";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    input: Palette["primary"];
  }
  interface TypographyVariants {
    primary: React.CSSProperties;
    font20: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    primary?: React.CSSProperties;
    font20?: React.CSSProperties;
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    input?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    primary: true;
    font20: true;
  }
}

const manrope = Manrope({
  weight: ["800"],
  style: ["normal"],
  subsets: ["latin"],
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const getTheme = (mode: "light") =>
  createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 768,
        lg: 1200,
        xl: 1440,
      },
    },
    palette: lightThemePalette,
    typography: {
      fontSize: 16,
      fontFamily: inter.style.fontFamily,
      h1: {
        fontSize: "40px",
        fontWeight: "700",
        lineHeight: "100%",
        fontFamily: manrope.style.fontFamily,
      }, // used
      h2: { fontSize: "16px", fontWeight: "400", lineHeight: "24px" }, // used
      h3: { fontSize: "18px", fontWeight: "700", lineHeight: "28px" },
      h4: { fontSize: "14px", fontWeight: "400", lineHeight: "100%" }, // used
      h5: {
        fontSize: "20px",
        fontWeight: "500",
        lineHeight: "30px",
        letterSpacing: "0.15px",
      }, // used
      body1: { fontSize: "16px", fontWeight: "400", lineHeight: "140%" }, // used
      body2: { fontSize: "14px", fontWeight: "400", lineHeight: "120%" },
      subtitle1: { fontSize: "12px", fontWeight: "400", lineHeight: "100%" }, // used
      subtitle2: { fontSize: "10px", fontWeight: "400", lineHeight: "100%" }, // used
    },
    components: components(mode),
  });

export default getTheme;
