import React, { ReactNode } from "react";
import { FormHelperText } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";
import { TextFieldProps } from "@mui/material/TextField/TextField";
import { Box } from "@/ui/Box/Box";
import { FieldRadiusProps } from "@/ui/helpers";
import MuiTextField from "@mui/material/TextField";

interface TextInputInternalProps extends FieldRadiusProps {
  helperText?: ReactNode;
  error?: boolean;
  register?: UseFormRegisterReturn;
}
interface TextInputWrapperProps {
  wrapperSx?: TextFieldProps["sx"];
}

export type TextInputProps = TextInputInternalProps &
  TextFieldProps &
  TextInputWrapperProps;

const TextField: React.FC<TextInputProps> = ({
  helperText,
  error,
  register = {},
  sx = {},
  wrapperSx = {},
  required,
  withoutLeftRadius,
  withoutRightRadius,
  ...textFieldProps
}) => (
  <Box width="100%" sx={wrapperSx}>
    <MuiTextField
      error={error}
      required={required}
      sx={{ width: "100%", ...sx }}
      {...register}
      {...textFieldProps}
    />
    {helperText && (
      <FormHelperText
        error={error}
        sx={{
          display: "flex",
          mt: "6px",
          ml: "16px",
          fontSize: "12px",
          alignItems: "center",
        }}
      >
        {helperText}
      </FormHelperText>
    )}
  </Box>
);

export default TextField;
