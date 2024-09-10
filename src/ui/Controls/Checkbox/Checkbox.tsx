import React from "react";
import { Checkbox as MuiCheckbox } from "@mui/material";
import { CheckboxProps } from "@mui/material/Checkbox/Checkbox";
import SvgCheckboxOff from "@/assets/icons/CheckboxOff";
import SvgCheckboxOn from "@/assets/icons/CheckboxOn";

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <MuiCheckbox
      icon={<SvgCheckboxOff />}
      checkedIcon={<SvgCheckboxOn />}
      {...props}
    />
  );
};

export default Checkbox;
