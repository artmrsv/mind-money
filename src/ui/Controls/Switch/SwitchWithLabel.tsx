import React from "react";
import { Switch } from "@/ui/Controls/Switch/Switch";
import { FormControlLabel, FormControlLabelProps } from "@mui/material";
import { SxProps } from "@mui/system";

interface SwitchWithLabelProps extends Omit<FormControlLabelProps, "control"> {
  label: string;
  labelPlacement?: "end" | "start" | "top" | "bottom";
  disabled?: boolean;
  sx?: SxProps;
  value?: boolean;
}

const labelSx = {
  justifyContent: "space-between",
  width: "100%",
  marginLeft: 0,
  height: "56px",
  padding: "12px 16px",
  borderRadius: "16px",
  backgroundColor: "background.default",
};

const SwitchWithLabel: React.FC<SwitchWithLabelProps> = ({
  label,
  labelPlacement,
  sx,
  disabled,
  onChange,
  value,
}) => {
  return (
    <FormControlLabel
      control={<Switch />}
      disabled={disabled}
      sx={{
        ...labelSx,
        ...sx,
      }}
      label={label}
      labelPlacement={labelPlacement ?? "start"}
      onChange={onChange}
      checked={value}
    />
  );
};

export default SwitchWithLabel;
