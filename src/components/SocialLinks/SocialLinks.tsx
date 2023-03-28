import { Grid } from "@mui/material";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";
import navigate from "../../assets/logos/logo-small.png";
import twitter from "../../assets/icons/twitter.png";
import youtube from "../../assets/icons/youtube.png";

const SocialLinks = () => {
  return (
    <Grid container alignItems="center" spacing="1rem">
      <Grid item sm textAlign={"center"}>
        <img
          src={navigate}
          style={{ width: "3rem", marginLeft: "11rem" }}
          alt="navigate"
        />
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
  );
};

export default SocialLinks;
