import React from "react";
import MuiTabs from "@mui/material/Tabs";
import MuiTab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import { SxProps } from '@mui/system';

interface TabsOptions {
  label: string;
}

interface TabsProps {
  options?: Array<TabsOptions>;
  sx?: SxProps
}

const Tab = styled(MuiTab)(({ theme }) => ({
  backgroundColor: "transparent",
  borderRadius: "10px",
  marginRight: "10px",
  fontWeight: 500,
  "&.Mui-selected": {
    color: theme.palette.secondary.dark,
    backgroundColor: "white",
    border: "none",
  },
}));

const Tabs: React.FC<TabsProps> = ({ options, sx = {} }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (!options) return null;

  return (
    <MuiTabs
      value={value}
      onChange={handleChange}
      scrollButtons={false}
      variant="fullWidth"
      TabIndicatorProps={{ style: { height: 0 } }}
      sx={{
        width: "100%",
        backgroundColor: "secondary.light",
        borderRadius: "10px",
        p: "4px",
        "& .MuiTabs-scroller": { width: "100%" },
        ...sx
      }}
    >
      {options.map(({ label }, index) => (
        <Tab key={index} iconPosition="start" label={label} value={index} />
      ))}
    </MuiTabs>
  );
};

export default Tabs;
