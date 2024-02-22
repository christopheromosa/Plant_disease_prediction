import React from "react";
import styles from "./SidebarComponents.module.css";
import { Link } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import NatureIcon from "@mui/icons-material/Nature";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SettingsIcon from "@mui/icons-material/Settings";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const SidebarComponents = (props) => {
  const navigate = useNavigate();

  const logMeOut = () => {
    const token = localStorage.getItem("token");
    console.log(token);

    axios({
      method: "POST",
      url: "http://127.0.0.1:8000/logout",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Include token in Authorization header
      },
    })
      .then((response) => {
        console.log(response);
        if (response) {
          
          const data = response.json();
          console.log(data.detail);
          alert(data.detail);
          console.log("user logged out successfully");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Logout error: ", error);
      });
    localStorage.clear();
  };

  return (
    // <!-- sidebar -->
    <aside className={styles.sidebar}>
      {/* logo  */}
      <div className={styles.logo}>
        <img src="./images/plant-leaf-svgrepo-com.svg" alt="plant-logo" />
        <span>Metaverse</span>
      </div>
      {/* <!-- sidebar links --> */}
      <div className={styles.sidebar_links}>
        <ul>
          <li>
            <i>
              <DashboardIcon />
            </i>
            <Link to="/overview" className={styles.no_decoration}>
              Overview
            </Link>
          </li>
          <li>
            <i>
              <NatureIcon />
            </i>
            <Link to="/Plants" className={styles.no_decoration}>
              Plants
            </Link>
          </li>
          <li>
            <i>
              <ThumbUpIcon />
            </i>
            <Link to="/Recommendation" className={styles.no_decoration}>
              Recommendation
            </Link>
          </li>
          <li>
            <i>
              <SettingsIcon />
            </i>
            <Link to="/Settings" className={styles.no_decoration}>
              Settings
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- logout --> */}
      <div className={styles.logout}>
        <p>
          <Link to="/" onClick={logMeOut}>
            Logout
          </Link>
        </p>
      </div>
    </aside>
  );
};
