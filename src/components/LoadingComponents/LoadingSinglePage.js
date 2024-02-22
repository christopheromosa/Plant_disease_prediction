import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import {Box,Typography} from "@mui/material";

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex",flexDirection:'column',gap:"1rem" ,justifyContent:"center",alignItems:"center",marginTop:"2rem"}}>
      <CircularProgress />

      <Typography variant="p">Select the plant First</Typography>
    </Box>
  );
}
