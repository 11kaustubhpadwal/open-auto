import { Box } from "@mui/material";
import { LayoutProps } from "./Layout.types";

const Layout = ({
  children,
  backgroundColor = "#11171F",
  sx,
  ...rest
}: LayoutProps) => {
  return (
    <Box sx={{ padding: "2rem 3.5rem", backgroundColor, ...sx }} {...rest}>
      {children}
    </Box>
  );
};

export default Layout;
