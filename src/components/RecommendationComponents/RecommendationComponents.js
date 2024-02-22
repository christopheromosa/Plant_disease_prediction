import React, { useState, useEffect } from "react";
import styles from "./RecommendationComponents.modal.css";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DiseaseRecommendationComponents from "../TabsComponents/DiseaseRecommendationComponents";
import axios from "axios";
import LoadingSinglePage from "../LoadingComponents/LoadingSinglePage";

const RecommendationComponents = () => {
  const [value, setValue] = React.useState("1");
  const [selected, setSelected] = useState("");
  const [options, setOptions] = useState([]);
  const [plantsData, setPlantsData] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelect = (event) => {
    setSelected(event.target.value);
    console.log(selected);
  };

  const fetchOptions = async () => {
    // Added async keyword for asynchronous axios call
    try {
      const response = await axios.get(`http://127.0.0.1:8000/get_plants`); // Wait for axios response
      setOptions(response.data.plants);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchOptions();
  }, []);

  useEffect(() => {
    if (selected !== "") {
      console.log(selected);
      fetchPlantData(selected);
      console.log(selected);
      console.log("options changed and the API was called successfully");
    }
  }, [selected]);

  const fetchPlantData = async (plant) => {
    // Added async keyword for asynchronous axios call
    console.log(plant);
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/get_plant_specific/${plant}`
      );
      console.log(response);
      if (response) {
        console.log(response.data);
        setPlantsData(response.data.plant.diseases);
      } else {
        alert("error fetching plant data");
        console.log("error fetching plant data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(plantsData); // Log plantData after it is updated
  }, [plantsData]);

  return (
    <div className="recommendation_container">
      {" "}
      {/* <!-- header --> */}
      <header className={styles.header1}>
        <h1>Plant Recommendations</h1>
        <p>
          Plants Recommendation page,where you get recommendation on plants
          diseases!
        </p>
      </header>
      {/* <!-- plants selection input from dropdown--> */}
      <div className={styles.dropdown}>
        <form name="plants" id="plants" action="/action_page.php">
          <label htmlFor="plant">Select Plant: </label>
          <select
            name="plant"
            id="plant"
            value={selected}
            onChange={handleSelect}
          >
            <option value="" disabled hidden>
              Select a plant
            </option>
            {options.map((plant, index) => (
              <option
                value={plant.plant_name}
                key={index}
                className={styles.option}
              >
                {plant.plant_name}
              </option>
            ))}
          </select>
        </form>
      </div>
      {/* <!-- Plant_info_container --> */}
      <div className="plant_recommendation_container">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
              <TabList onChange={handleChange}>
                <Tab label="Recommendation" value="1" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <DiseaseRecommendationComponents plantsData={plantsData} />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default RecommendationComponents;
