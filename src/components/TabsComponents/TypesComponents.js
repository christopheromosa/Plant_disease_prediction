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

const TypesComponets = ({ plantTypeData }) => {
  console.log(plantTypeData);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Plant Types
      </Typography>
      <PlantTypeList plantTypeData={plantTypeData} />
    </div>
  );
};

export default TypesComponets;

const PlantTypeList = ({ plantTypeData }) => {
  return (
    <>
      {!plantTypeData || plantTypeData.length === 0 ? (
        <LoadingSinglePage />
      ) : (
        <Box sx={{ margin: 0, padding: 0 }}>
          <List sx={{ flex: 1, overflowY: "auto", height: "13rem" }}>
            {plantTypeData.map((plantType, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar
                    alt={plantType.plant_type_name}
                    src={plantType.image_path}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={plantType.plant_type_name}
                  secondary={plantType.plant_type_description}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </>
  );
};
