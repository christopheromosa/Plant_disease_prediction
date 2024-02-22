import React from "react";
import styles from "./ProfileComponents.module.css";

export const ProfileComponents = (props) => {
  return (
    // <!-- profile_details -->
    <div className={styles.profile_details}>
      <img
        src="./images/plant_disease_prediction_logo.jpg"
        alt="profile picture"
      />
      <h1>{props.username}</h1>
      <p>{props.email}</p>
      <p>{props.occupation}</p>
    </div>
  );
};
