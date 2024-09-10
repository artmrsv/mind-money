"use client";

import React, { ReactNode } from "react";
import {
  FormHelperText,
  TextField as MuiTextField,
} from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";
import { TextFieldProps } from "@mui/material/TextField/TextField";
import { Box } from "@/ui/Box/Box";
import { FieldRadiusProps } from "@/ui/helpers";
import { Typography } from "@/ui/Typography/Typography";

interface TextInputInternalProps extends FieldRadiusProps {
  helperText?: ReactNode;
  error?: boolean;
  register?: UseFormRegisterReturn;
  label?: ReactNode;
  required?: boolean;
}
interface TextInputWrapperProps {
  wrapperSx?: TextFieldProps["sx"];
  labelSx?: TextFieldProps["sx"];
}

export type TextInputProps = TextInputInternalProps &
  TextFieldProps &
  TextInputWrapperProps;

const InputBase: React.FC<TextInputProps> = ({
  helperText,
  error,
  register = {},
  wrapperSx = {},
  withoutLeftRadius,
  withoutRightRadius,
  required,
  labelSx,
  ...textFieldProps
}) => (
  <Box
    width="100%"
    display="flex"
    flexDirection="column"
    gap="4px"
    alignItems="flex-start"
    sx={wrapperSx}
  >
    <Box width="100%">
      <MuiTextField error={error} {...register} {...textFieldProps} />
      {helperText && (
        <FormHelperText
          error={error}
          sx={{
            mt: "6px",
            display: "flex",
            gap: "5px",
            alignItems: "center",
            fontSize: "11px",
          }}
        >
          <Typography
            component="span"
            color={error ? "error" : "secondary.dark"}
            fontSize={11}
          >
            {helperText}
          </Typography>
        </FormHelperText>
      )}
    </Box>
  </Box>
);

export default InputBase;
