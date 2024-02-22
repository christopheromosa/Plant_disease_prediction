import React from 'react'
import { Box, Tab} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DescriptionComponents from './DescriptionComponents';
import DiseasesComponents from './DiseasesComponents';
import TypesComponents  from './TypesComponents';

const TabsComponents = ({plantsData,plantDiseaseData,plantTypeData}) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Description" value="1" />
            <Tab label="Type" value="2" />
            <Tab label="Diseases" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><DescriptionComponents plantsData={plantsData}/></TabPanel>
        <TabPanel value="2"><TypesComponents plantTypeData={plantTypeData}/></TabPanel>
        <TabPanel value="3"><DiseasesComponents plantDiseaseData={plantDiseaseData}/></TabPanel>
      </TabContext>
    </Box>
  );
}

export default TabsComponents