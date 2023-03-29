import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

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
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid container spacing="8rem" pl={4} pr={4}>
        {!isMd && (
          <Grid item md={12} lg={6}>
            <img src={mobileWithBg} alt="hero" style={{ width: "100%" }} />
          </Grid>
        )}
        <Grid item md={12} lg={6}>
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
        {isMd && (
          <Grid item md={12} lg={6}>
            <img src={mobileWithBg} alt="hero" style={{ width: "100%" }} />
          </Grid>
        )}
      </Grid>
      <Grid
        container
        alignItems={"center"}
        spacing="1rem"
        mt={8}
        justifyContent={isMd ? "center" : "start"}
      >
        <Grid item md={12} lg>
          <img src={logo} alt="logo" />
        </Grid>
        <Grid item md={6} lg="auto">
          <IconText icon={phone} text="+769 586 4558" />
        </Grid>
        <Grid item ml={isMd ? 0 : 2} md={6} lg="auto">
          <IconText icon={mail} text="service@openauto.ca" />
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        spacing="1rem"
        mt={3}
        justifyContent={isMd ? "center" : "start"}
      >
        <Grid item md={12} lg>
          Open Auto @ All Rights Reserved
        </Grid>
        <Grid item md="auto" lg="auto">
          <img src={facebook} style={{ width: "1.25rem" }} alt="facebook" />
        </Grid>
        <Grid item md="auto" lg="auto">
          <img src={twitter} style={{ width: "1.25rem" }} alt="twitter" />
        </Grid>
        <Grid item md="auto" lg="auto">
          <img
            src={youtube}
            style={{ width: "1.25rem", marginTop: ".5rem" }}
            alt="youtube"
          />
        </Grid>
        <Grid item md="auto" lg="auto">
          <img src={linkedin} style={{ width: "1.25rem" }} alt="linkedin" />
        </Grid>
        <Grid item md="auto" lg="auto">
          <img src={instagram} style={{ width: "1.25rem" }} alt="instagram" />
        </Grid>
      </Grid>
    </>
  );
};

export default InfoSection;
