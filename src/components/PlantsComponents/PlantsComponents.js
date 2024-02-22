import React, { useState, useEffect } from "react";
import "../../App.css";
import styles from "./PlantsComponents.modal.css";
import CarouselComponents from "../CarouselComponents/CarouselComponents";
import axios from "axios";
import TabsComponents from "../TabsComponents/TabsComponents";

const PlantsComponents = () => {
  // Fetch available plants from the backend along with the plant information upon the first render

  const [selected, setSelected] = useState("");
  const [options, setOptions] = useState([]);
  const [plantsData, setPlantsData] = useState([]);
  const [plantDiseaseData, setPlantDiseaseData] = useState([]);
  const [plantTypeData, setPlantTypeData] = useState([]);

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
        setPlantsData(response.data.plant);
        setPlantDiseaseData(response.data.plant.diseases);
        setPlantTypeData(response.data.plant.types);

      } else {
        alert('error fetching plant data');
        console.log("error fetching plant data");
      }
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

  useEffect(() => {
    console.log(plantsData); // Log plantData after it is updated
    console.log(plantDiseaseData); // Log plantDiseaseData after it is updated
    console.log(plantTypeData); // Log plantTypeData after it is updated
  }, [plantsData, plantDiseaseData, plantTypeData]);

  return (
    <>
      {/* <!-- header --> */}
      <header className={styles.header1}>
        <h1>Plants</h1>
        <p>
          Plants info page, where you get enriched with plant information and
          knowledge!
        </p>
      </header>
      {/* <!-- plants selection input from dropdown--> */}
      <div className="dropdown">
        <form name="plants" id="plants1">
          <label htmlFor="plant">Select Plant: </label>
          <select id="plant" value={selected} onChange={handleSelect}>
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
      {/* <!-- plant_carousel --> */}
      <div className="plant_carousel">
        <CarouselComponents />
      </div>
      {/* <!-- Plant_info_container --> */}
      <div className="Plant_info_container">
        {/* <!-- header_titles_tabs--> */}
        <div className="header_titles_tabs">
          <TabsComponents
            plantsData={plantsData}
            plantDiseaseData={plantDiseaseData}
            plantTypeData={plantTypeData}
          />
        </div>
        {/* <!-- tabs_contents --> */}
        {/* <div className="tabs_contents"></div> */}
      </div>
    </>
  );
};

export default PlantsComponents;
