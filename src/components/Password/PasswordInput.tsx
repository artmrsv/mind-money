import InputBase from "@/ui/TextInput/InputBase";
import { Button } from "@/ui/Button/Button";
import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { AuthForm } from "@/app/auth/page";

interface PasswordInputProps {
  value: AuthForm["password"];
  onChange: (event: string) => void;
  error: boolean;
}

const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const GENERATED_PASSWORDS = [
  "asAASsdd123a",
  "sdq1@Eddaa",
  "s42342fdasA",
  "oOOOossd12",
  "Nnnsdnsd23331",
  "@#$ASddsd123",
];

const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  onChange,
  error,
}) => {
  const getRandomPass = () => {
    const randomId = randomIntFromInterval(0, GENERATED_PASSWORDS.length);

    return GENERATED_PASSWORDS[randomId];
  };
  return (
    <InputBase
      value={value}
      onChange={onChange}
      label="Password"
      variant="filled"
      error={error}
      InputLabelProps={{ shrink: !!value || undefined }}
      InputProps={{
        endAdornment: !value ? (
          <InputAdornment position="start">
            <Button
              sx={{ height: "32px", borderRadius: "8px" }}
              onClick={() => {
                onChange(getRandomPass());
              }}
              variant="outlined"
            >
              Generate
            </Button>
          </InputAdornment>
        ) : undefined,
      }}
    />
  );
};

export default PasswordInput;
