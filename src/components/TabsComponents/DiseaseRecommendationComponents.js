import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";
import LoadingSinglePage from "../LoadingComponents/LoadingSinglePage";

const DiseaseRecommendationComponents = ({ plantsData }) => {

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Plant Diseases Recommendations
      </Typography>
      <PlantTypeList plantRecommendations={plantsData} />
    </div>
  );
};

export default DiseaseRecommendationComponents;

const PlantTypeList = ({ plantRecommendations }) => {

  console.log(plantRecommendations);
  return (
    <>
      {!plantRecommendations || plantRecommendations.length === 0 ? (
        <LoadingSinglePage />
      ) : (
        <Box sx={{ margin: 0, padding: 0 }}>
          <List sx={{ flex: 1, overflowY: "auto", height: "13rem" }}>
            {plantRecommendations &&
              plantRecommendations.map((plantRecommendation, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <Avatar
                      alt={plantRecommendation.name}
                      src={plantRecommendation.imageUrl}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={plantRecommendation.plant_disease_name}
                    secondary={plantRecommendation.plant_disease_recommendation}
                  />
                </ListItem>
              ))}
          </List>
        </Box>
      )}
    </>
  );
};
