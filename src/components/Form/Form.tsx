import { Box, Grid, Typography } from "@mui/material";

import ButtonOutlined from "../ButtonOutlined";
import InputField from "../InputField";
import hero from "../../assets/images/hero.png";

const Form = () => {
  return (
    <Grid container mt={12}>
      <Grid item sm={6}>
        <Typography pt={9} fontSize={58} fontWeight={700} lineHeight={1.2}>
          Vehicle Maintainance From The Comfort of Your Home
        </Typography>
        <Typography mt={3} mb={5}>
          Open Auto Soothes the hassle of maintaining your vehicle and helps you
          deal with unexpected repairs worry-free.
        </Typography>
        <InputField placeholder="Enter Your Name" />
        <InputField placeholder="Enter Your Email" />
        <Box sx={{ width: "57.5%" }}>
          <ButtonOutlined fullWidth customBorderColor="#3b454f">
            Submit
          </ButtonOutlined>
        </Box>
      </Grid>
      <Grid item sm={6}>
        <img src={hero} alt="hero" style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
};

export default Form;
