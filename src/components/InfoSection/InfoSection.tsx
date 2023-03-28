import { Grid, Typography } from "@mui/material";

import ButtonOutlined from "../ButtonOutlined";
import IconText from "../IconText";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";
import logo from "../../assets/logos/logo.svg";
import mail from "../../assets/icons/mail.png";
import mobileWithBg from "../../assets/images/mobile-with-bg.png";
import phone from "../../assets/icons/call.png";
import twitter from "../../assets/icons/twitter.png";
import youtube from "../../assets/icons/youtube.png";

const InfoSection = () => {
  return (
    <>
      <Grid container spacing="8rem" pl={4} pr={4}>
        <Grid item sm={6}>
          <img src={mobileWithBg} alt="hero" style={{ width: "100%" }} />
        </Grid>
        <Grid item sm={6}>
          <Typography pt={9} fontSize={58} fontWeight={700} lineHeight={1.2}>
            Focused on Time Saving
          </Typography>
          <Typography mt={3} mb={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <ButtonOutlined>Download the mobile app</ButtonOutlined>
        </Grid>
      </Grid>
      <Grid container alignItems={"center"} spacing="1rem" mt={8}>
        <Grid item sm>
          <img src={logo} alt="logo" />
        </Grid>
        <Grid item>
          <IconText icon={phone} text="+769 586 4558" />
        </Grid>
        <Grid item ml={2}>
          <IconText icon={mail} text="service@openauto.ca" />
        </Grid>
      </Grid>
      <Grid container alignItems="center" spacing="1rem" mt={3}>
        <Grid item sm>
          Open Auto @ All Rights Reserved
        </Grid>
        <Grid item>
          <img src={facebook} style={{ width: "1.25rem" }} alt="facebook" />
        </Grid>
        <Grid item>
          <img src={twitter} style={{ width: "1.25rem" }} alt="twitter" />
        </Grid>
        <Grid item>
          <img
            src={youtube}
            style={{ width: "1.25rem", marginTop: ".5rem" }}
            alt="youtube"
          />
        </Grid>
        <Grid item>
          <img src={linkedin} style={{ width: "1.25rem" }} alt="linkedin" />
        </Grid>
        <Grid item>
          <img src={instagram} style={{ width: "1.25rem" }} alt="instagram" />
        </Grid>
      </Grid>
    </>
  );
};

export default InfoSection;
