import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import ButtonOutlined from "../ButtonOutlined";
import { FormData } from "../../api/users/types";
import InputField from "../InputField";
import hero from "../../assets/images/hero.png";
import { sendData } from "../../api/users/users";
import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await sendData(formData);
    setLoading(false);
    setFormData({
      fullName: "",
      email: "",
    });
  };

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  const getMarginValue = isMd ? 9 : 0;

  return (
    <Grid container mt={12}>
      <Grid item md={12} lg={6}>
        <Typography pt={9} fontSize={58} fontWeight={700} lineHeight={1.2}>
          Vehicle Maintainance From The Comfort of Your Home
        </Typography>
        <Typography mt={3} mb={5}>
          Open Auto Soothes the hassle of maintaining your vehicle and helps you
          deal with unexpected repairs worry-free.
        </Typography>
        <form onSubmit={handleSubmit}>
          <InputField
            placeholder="Enter Your Name"
            required
            value={formData.fullName}
            onChange={handleChange}
            name="fullName"
            disabled={loading}
          />
          <InputField
            placeholder="Enter Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            name="email"
            disabled={loading}
          />
          <Box sx={{ width: "57.5%" }}>
            <ButtonOutlined
              fullWidth
              customBorderColor="#3b454f"
              type="submit"
              disabled={loading}
            >
              Submit
            </ButtonOutlined>
          </Box>
        </form>
      </Grid>
      <Grid item md={12} lg={6} mt={getMarginValue}>
        <img src={hero} alt="hero" style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
};

export default Form;
