"use client";

import React, { useMemo } from "react";
import { Box } from "@/ui/Box/Box";
import { Typography } from "@/ui/Typography/Typography";
import { Stack } from "@mui/material";
import SvgVector from "@/assets/icons/Vector";
import { AuthForm } from "@/app/auth/page";
import { UseFormWatch } from "react-hook-form";
import { z } from "zod";
import SvgSuccess from "@/assets/icons/Success";
import { EnumColors } from "@/config/colors";

const lineSx = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

interface PasswordValidatorProps {
  watch: UseFormWatch<AuthForm>;
  isError?: boolean;
}

const emailZod = z.string().email();
const MIN_PASSWORD_LENGTH = 8

const validatePassword = (password: string) => {
  const isNotContainEmail = !emailZod.safeParse(password)?.success;
  const isContainUppercase = /[A-Z]/.test(password);
  const isContainSpecialCharOrNumber =
    /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]|[0-9]/.test(password);
  const isMinLength = z.string().min(MIN_PASSWORD_LENGTH).safeParse(password)?.success;

  return {
    isNotContainEmail,
    isContainUppercase,
    isContainSpecialCharOrNumber,
    isMinLength,
  };
};

const Rule: React.FC<{ message: string; isValid: boolean }> = ({
  message,
  isValid,
}) => {
  const color = isValid ? EnumColors.success : EnumColors.error;
  return (
    <Box sx={lineSx}>
      {isValid ? <SvgSuccess /> : <SvgVector stroke={color} />}
      <Typography variant="subtitle1" color={color}>
        {message}
      </Typography>
    </Box>
  );
};

const PasswordValidator: React.FC<PasswordValidatorProps> = ({
  watch,
  isError,
}) => {
  const password = watch("password");
  const validateData = useMemo(() => validatePassword(password), [password]);

  return (
    <Box mt="6px">
      <Typography
        variant="subtitle1"
        color="secondary"
        mb="8px"
        sx={{ display: "inline-flex", gap: "4px" }}
        component="div"
      >
        Password strenght:
        {password && isError && (
          <Typography
            variant="subtitle1"
            color={EnumColors.error}
            component="span"
          >
            Weak password :(
          </Typography>
        )}
      </Typography>
      <Stack gap="8px">
        <Rule
          message="Can’t contain e-mail address"
          isValid={!!password && validateData.isNotContainEmail}
        />
        <Rule
          message="At least 8 characters"
          isValid={validateData.isMinLength}
        />
        <Rule
          message="Contains a number or(and) symbol"
          isValid={validateData.isContainSpecialCharOrNumber}
        />
        <Rule
          message="One or more capitalized letter"
          isValid={validateData.isContainUppercase}
        />
      </Stack>
    </Box>
  );
};

export default PasswordValidator;
