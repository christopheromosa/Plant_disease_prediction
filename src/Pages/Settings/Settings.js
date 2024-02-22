import React, { useState, useEffect } from "react";
import "../../App.css";
import { HistoryComponents } from "../../components/HistoryComponents/HistoryComponents";
import UploadComponents from "../../components/UploadComponents/UploadComponents";
import { ProfileComponents } from "../../components/ProfileComponents/ProfileComponents";
import { ReminderComponents } from "../../components/ReminderComponents/ReminderComponents";
import UpgradeToPremium from "../../components/UpgradeToPremium/UpgradeToPremium";
import { SidebarComponents } from "../../components/SidebarComponents/SidebarComponents";
import { useGlobalContext } from "../Authentication/AuthProvider";
import axios from "axios";
import { useHistoryFetch } from "../../components/UtilsComponents/UtilsComponents";
import SettingsComponents from "../../components/SettingsComponents/SettingsComponents";
const Settings = () => {
  const { loading, userDetails, userHistory } = useHistoryFetch();

  return (
    <div className="main_container_wrapper">
      <SidebarComponents />

      <div className="main_content_wrapper">
        <div className="right_settings_wrapper">
          <SettingsComponents />
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

export default Settings;
