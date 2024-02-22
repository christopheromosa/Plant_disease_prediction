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

const DiseasesComponents = ({plantDiseaseData}) => {
  console.log(plantDiseaseData);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Plant Diseases
      </Typography>
      <PlantDiseaseList plantDiseaseData={plantDiseaseData} />
    </div>
  );
};

export default DiseasesComponents;

const PlantDiseaseList = ({ plantDiseaseData }) => {
  return (
<>
  {!plantDiseaseData || plantDiseaseData.length === 0 ? (
<LoadingSinglePage/>
  ):(
    <Box sx={{ margin: 0, padding: 0 }}>
      <List sx={{ flex: 1, overflowY: "auto", height: "13rem" }}>
        {plantDiseaseData.map((plantDisease, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar alt={plantDisease.plant_disease_name} src={plantDisease.image_path} />
            </ListItemAvatar>
            <ListItemText
              primary={plantDisease.plant_diseasea_name}
              secondary={plantDisease.plant_disease_description}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  ) }
</>
  );
};

