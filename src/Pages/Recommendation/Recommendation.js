import React, { useState, useEffect } from "react";
import "../../App.css";
import { ProfileComponents } from "../../components/ProfileComponents/ProfileComponents";
import { ReminderComponents } from "../../components/ReminderComponents/ReminderComponents";
import UpgradeToPremium from "../../components/UpgradeToPremium/UpgradeToPremium";
import RecommendationComponents from "../../components/RecommendationComponents/RecommendationComponents";
import { SidebarComponents } from "../../components/SidebarComponents/SidebarComponents";
import { useGlobalContext } from "../Authentication/AuthProvider";
import { useHistoryFetch } from "../../components/UtilsComponents/UtilsComponents";
const Recommendation = () => {
  const { loading, userDetails, userHistory } = useHistoryFetch();

  return (
    <div className="main_container_wrapper">
      <SidebarComponents />
      <div className="main_content_wrapper">
        <div className="right_recommendation_wrapper">
          <RecommendationComponents />
        </div>

        <div className="left_content_wrapper">
          {userDetails && (
            <ProfileComponents
              username={userDetails[0]}
              occupation={userDetails[1]}
              email={userDetails[2]}
            />
          )}
          <hr />
          <ReminderComponents />
          <UpgradeToPremium />
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
