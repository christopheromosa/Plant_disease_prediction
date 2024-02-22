import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import LoadingSinglePage from "../LoadingComponents/LoadingSinglePage";
const DescriptionComponents = ({ plantsData }) => {
  return (
    <>
      {!plantsData || plantsData.length === 0 ? (
        <LoadingSinglePage />
      ) : (
        <Card sx={{ margin: 0, padding: 0 }}>
          <Box sx={{ flex: 1, overflowY: "auto", height: "19rem" }}>
            <CardMedia
              component="img"
              alt="Plant Image"
              sx={{ height: "100%", width: "100%" }}
              image="./images/plant_leaf.jpeg"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Plant Name:{plantsData.plant_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {plantsData.plant_description}
              </Typography>
            </CardContent>
          </Box>
        </Card>
      )}
    </>
  );
};

export default DescriptionComponents;
