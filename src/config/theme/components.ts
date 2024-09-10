import { Colors } from "@/config/theme/palette";
import { Theme } from "@mui/material/styles";
import { EnumColors } from "@/config/colors";

export const components = (mode: "light"): Theme["components"] => ({
  MuiButton: {
    variants: [
      {
        props: { variant: "contained", color: "primary" },
        style: {
          backgroundColor: Colors[mode].primaryMain,
          color: "white",
          "&:hover": {
            boxShadow: "none",
            transition: '0.2s',
            opacity: 0.8,
            backgroundColor: Colors.light.blue,
          },
          "&.Mui-disabled": {
            color: "#ffffff",
            backgroundColor: "#A1B1E7",
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        boxShadow: "none",
        padding: "8",
        fontSize: "14px",
        height: 40,
        lineHeight: "120%",
        fontWeight: 400,
        borderRadius: "4px",
        transition: "none",
        width: "100%",
        maxHeight: 56,
        textTransform: "initial",
        "&.Mui-disabled": {
          color: "white",
        },
      },
      startIcon: {
        marginRight: 10,
        marginLeft: 2,
      },
    },
  },


  MuiTab: {
    styleOverrides: {
      root: {
        fontSize: "14px",
        lineHeight: "18px",
        fontWeight: 400,
        textTransform: "initial",
        minHeight: "unset",
        minWidth: "unset",
      },
    },
  },

  MuiTabs: {
    styleOverrides: {
      root: {
        width: "max-content",
        minHeight: "unset",
      },
      scroller: {
        flex: "unset",
        width: "max-content",
      },
    },
  },

  MuiTextField: {
    variants: [
      {
        props: { variant: "filled" },
        style: {
          "& .MuiFilledInput-root": {
            padding: "8px",
            fontSize: 16,
            marginTop: 0,
            borderRadius: "6px",

            backgroundColor: "inherit",
            "&::before": {
              display: "none",
            },
            "&::after": {
              display: "none",
            },
            height: "56px",
            border: `1px solid ${Colors[mode].primaryContrastText}`,
            color: Colors[mode].primaryMain,
            input: {
              borderRadius: "12px",
              paddingTop: "12px",
              paddingBottom: "0px",
              paddingLeft: "12px",
            },
            "& .Mui-disabled": {
              backgroundColor: "#ECEEF0",
            },
            "&.Mui-error": {
              border: `1px solid ${Colors[mode].error}`,
            },
            "&.Mui-focused:not(.Mui-error)": {
              borderColor: Colors[mode].blue,
              backgroundColor: "inherit",
            },
          },
        },
      },
    ],
    styleOverrides: {

      root: {
        width: "100%",
        borderRadius: "12px",
        "&&&& .MuiInputAdornment-root": {marginTop: 0},
        "& input[type=number]::-webkit-outer-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
        "& input[type=number]::-webkit-inner-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
        "& input:-webkit-autofill": {
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": Colors[mode].primaryMain,
          transition: "background-color 5000s ease-in-out 0s",
        },
      },
    },
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        borderRadius: "16px",
        backgroundColor: "#F4F4F4",
      },
      input: { paddingLeft: "16px" },
      inputMultiline: {
        paddingLeft: "4px",
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        color: "#9098A3",
        fontSize: "14px",
        "&.Mui-focused": {
          color: "#9098A3",
          fontSize: "14px",
        },
      },
      asterisk: {
        color: Colors[mode].error,
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        fontSize: "14px",
        "& .MuiTypography-root": { fontSize: "14px" },
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
          {
            borderColor: "inherit",
            borderWidth: 1,
          },
      },
    },
  },

  MuiCheckbox: {
    styleOverrides: {
      root: {
        padding: 0,
        "&.Mui-checked": {
          color: Colors[mode].blue,
        },
        "& .MuiSvgIcon-root": {
          width: "24px",
          height: "24px",
        },
      },
    },
  },
});
