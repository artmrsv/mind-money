import React from "react";
import { Radio as MuiRadio } from "@mui/material";
import { RadioProps } from "@mui/material/Radio/Radio";

interface RadioButtonProps extends RadioProps {}

const RadioButton: React.FC<RadioButtonProps> = ({ ...props }) => {
  return (
    <MuiRadio
      sx={{ padding: 0 }}
      {...props}
    />
  );
};

export default RadioButton;
