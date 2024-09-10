import { EnumColors } from "@/config/colors";
import background from "@/assets/png/background.png";

export const authLayoutContainerSx = {
  display: "flex",
  width: "100%",
  height: "100vh",
  overflow: "auto",
  bgcolor: {
    xs: "white",
    md: EnumColors.lightGray,
  },
  backgroundColor: "secondary.light",
  padding: {
    xs: "32px 24px",
    lg: "0px",
  },
};

export const authLayoutFormContainerSx = {
  display: "flex",
  width: {
    xs: "100%",
    lg: "50%",
  },
  height: "100%",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: {
    xs: "0px",
    lg: "0 64px 0 6%",
  },
};

export const authLayoutFooterSx = {
  display: {
    xs: "none",
    sm: "flex",
  },
  width: "100%",
  alignItems: {
    sm: "center",
    lg: "flex-end",
    xl: "center",
  },
  justifyContent: "space-between",
  py: {
    lg: "34px",
  },
};
export const authLayoutAdvertScreenSx = {
  display: {
    xs: "none",
    lg: "flex",
  },
  flexDirection: "column",
  width: "50%",
  height: "100%",
  px: "64px",
  py: "156px",
  color: "white",
  position: "relative",
  zIndex: 0,
};

export const authLayoutPictureContainer = {
  backgroundImage: `url(${background.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "fixed",
  right: "0px",
  top: "0px",
  bottom: "0px",
  width: '50%',
  display: {
    xs: "none",
    lg: "flex",
  },
}

export const authLayoutIssueContainerSx = {
  alignItems: {
    sm: "center",
    lg: "flex-end",
    xl: "center",
  },

  flexDirection: {
    sm: "row",
    lg: "column",
    xl: "row",
  },
};
export const authLayoutHeaderSx = {
  mb: {
    xs: "20px",
    sm: "29px",
  },
  py: {
    xs: "0px",
    lg: "24px",
  },
};
