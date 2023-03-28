import ButtonOutlined from "../ButtonOutlined";
import { Grid } from "@mui/material";
import IconText from "../IconText";
import logo from "../../assets/logos/logo.svg";
import mail from "../../assets/icons/mail.png";
import phone from "../../assets/icons/call.png";

const Navbar = () => {
  return (
    <Grid container alignItems={"center"} spacing="1rem">
      <Grid item sm>
        <img src={logo} alt="logo" />
      </Grid>
      <Grid item>
        <IconText icon={phone} text="+769 586 4558" />
      </Grid>
      <Grid item ml={2}>
        <IconText icon={mail} text="service@openauto.ca" />
      </Grid>
      <Grid item ml={2}>
        <ButtonOutlined>Download the mobile app</ButtonOutlined>
      </Grid>
    </Grid>
  );
};

export default Navbar;
