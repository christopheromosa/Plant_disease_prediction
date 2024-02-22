import React, { useState, useEffect } from "react";
import "../../App.css";
import { HistoryComponents } from "../../components/HistoryComponents/HistoryComponents";
import { ProfileComponents } from "../../components/ProfileComponents/ProfileComponents";
import { ReminderComponents } from "../../components/ReminderComponents/ReminderComponents";
import UpgradeToPremium from "../../components/UpgradeToPremium/UpgradeToPremium";
import { SidebarComponents } from "../../components/SidebarComponents/SidebarComponents";
import { useGlobalContext } from "../Authentication/AuthProvider";
import UploadComponents from "../../components/UploadComponents/UploadComponents";
import axios from "axios";
import LoadingComponents from "../../components/LoadingComponents/LoadingComponents";
import { useHistoryFetch } from "../../components/UtilsComponents/UtilsComponents";

const Overview = () => {
  const { loading,setLoading, userDetails, userHistory } = useHistoryFetch();
  return (
    <>
      {loading ? (
        <LoadingComponents />
      ) : (
        <>
          <div className="main_container_wrapper">
            <SidebarComponents />
            <div className="main_content_wrapper">
              <div className="right_content_wrapper">
                {userDetails && (
                  <UploadComponents username={userDetails[0]} setLoading={setLoading}/> // Render UploadComponents only when userDetails is available
                )}
                <HistoryComponents userHistory={userHistory} />
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
                {userHistory && (
                  <ReminderComponents userHistory={userHistory} />
                )}
                <UpgradeToPremium />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Overview;
