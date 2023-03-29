import { Grid, useMediaQuery, useTheme } from "@mui/material";

import ButtonOutlined from "../ButtonOutlined";
import IconText from "../IconText";
import logo from "../../assets/logos/logo.svg";
import mail from "../../assets/icons/mail.png";
import phone from "../../assets/icons/call.png";

const Navbar = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const getDisplayValue = isMd ? "none" : "block";

  return (
    <Grid container alignItems={"center"} spacing="1rem">
      <Grid item sm>
        <img src={logo} alt="logo" />
      </Grid>
      <Grid item display={getDisplayValue}>
        <IconText icon={phone} text="+769 586 4558" />
      </Grid>
      <Grid item ml={2} display={getDisplayValue}>
        <IconText icon={mail} text="service@openauto.ca" />
      </Grid>
      <Grid item ml={2} display={getDisplayValue}>
        <ButtonOutlined>Download the mobile app</ButtonOutlined>
      </Grid>
    </Grid>
  );
};

export default Navbar;
