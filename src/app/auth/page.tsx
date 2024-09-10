"use client";

import { Button } from "@/ui/Button/Button";
import { Box } from "@/ui/Box/Box";
import InputBase from "@/ui/TextInput/InputBase";
import { Typography } from "@/ui/Typography/Typography";
import { authContainerSx } from "@/screens/auth/auth.styled";
import Tabs from "@/ui/Tabs/Tabs";
import Checkbox from "@/ui/Controls/Checkbox/Checkbox";
import PasswordValidator from "@/components/Password/PasswordValidador";
import { useForm, Controller } from "react-hook-form";
import { authSchema } from "@/components/Password/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toastAlert } from "@/ui/Alert/toastify";

import PasswordInput from "@/components/Password/PasswordInput";

const tabsOptions = [
  {
    label: "Sign In",
  },
  {
    label: "Login",
  },
];

export interface AuthForm {
  email: string;
  phone: string;
  password: string;
  refferalCode?: string;
  isAgree?: boolean;
}

export default function Auth() {
  const {
    handleSubmit,
    formState: { errors, isValid },
    register,
    watch,
    control,
    setValue,
  } = useForm<AuthForm>({
    resolver: zodResolver(authSchema),
    mode: "onBlur",
  });

  const onSubmit = (value: AuthForm) => {
    toastAlert({
      content: (
        <Box>
          <Typography variant="body1">Успешная регистрация</Typography>
          <Typography variant="subtitle1">Email: {value.email}</Typography>
          <Typography variant="subtitle1">Phone: {value.phone}</Typography>
          <Typography variant="subtitle1">
            Password: {value.password}
          </Typography>
          {value.refferalCode && (
            <Typography variant="subtitle1">
              Refferal Code: {value.refferalCode}
            </Typography>
          )}
        </Box>
      ),
      options: { type: "success", style: { backgroundColor: "white" } },
    });
  };
  return (
    <Box sx={authContainerSx}>
      <Tabs options={tabsOptions} sx={{ mb: "22px" }} />

      <Box
        component="form"
        gap="24px"
        display="flex"
        flexDirection="column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputBase
          register={register("email", { required: "Enter email" })}
          label="E-mail"
          variant="filled"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <InputBase
          register={register("phone", { required: "Enter phone number" })}
          label="Phone number"
          variant="filled"
          error={!!errors.phone}
          helperText={errors.phone?.message}
        />
        <Box>
          <Controller
            name="password"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <PasswordInput
                error={!!errors.password}
                value={value}
                onChange={onChange}
              />
            )}
          />

          <PasswordValidator watch={watch} isError={!!errors.password} />
        </Box>

        <InputBase
          register={register("refferalCode")}
          label="Referral code"
          variant="filled"
        />
        <Box display="flex" alignItems="center">
          <Controller
            name="isAgree"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Checkbox
                sx={{ borderRadius: "6px", mr: "12px" }}
                value={value}
                onChange={onChange}
                defaultChecked={value}
              />
            )}
          />

          <Typography variant="body2" color="secondary">
            I accept the{" "}
            <Box component="a" href="google.com">
              Therms of Use
            </Box>{" "}
            and have read
            <Box component="a" href="google.com">
              {" "}
              Privacy Policy
            </Box>
          </Typography>
        </Box>
        <Button
          variant="contained"
          type="submit"
          disabled={!isValid}
          sx={{
            backgroundColor: "secondary.contrastText",
            width: "100%",
            height: "48px",
          }}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
}
