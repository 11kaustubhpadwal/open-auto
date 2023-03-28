import { Button, ButtonProps } from "@mui/material";

import { ButtonOutlinedProps } from "./ButtonOutlined.types";

const ButtonOutlined = ({
  sx,
  children,
  customBorderColor,
  ...props
}: ButtonOutlinedProps) => (
  <Button
    variant="outlined"
    sx={{
      ...sx,
      textTransform: "none",
      color: "#CFD1D4",
      border: `0.063rem solid ${customBorderColor || "#CFD1D4"}`,
      borderRadius: "1.5rem",
      fontWeight: "bold",
      fontSize: "1.1rem",
      padding: ".6rem 1.5rem",
      ":hover": {
        backgroundColor: "#8145E1",
        border: "0.063rem solid #8145E1",
      },
    }}
    {...props}
  >
    {children}
  </Button>
);
export default ButtonOutlined;
