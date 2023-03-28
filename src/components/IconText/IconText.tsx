import { Grid, Typography } from "@mui/material";

import { IconTextProps } from "./IconText.types";

const IconText = ({ icon, text }: IconTextProps) => {
  return (
    <Grid container alignItems="center">
      <Grid item>
        <img
          src={icon}
          alt={text}
          style={{ width: "1rem", marginRight: ".5rem", marginTop: ".5rem" }}
        />
      </Grid>
      <Grid item>
        <Typography>{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default IconText;
