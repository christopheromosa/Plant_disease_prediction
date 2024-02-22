import React, { useState, useEffect } from "react";
import styles from "./ReminderComponents.module.css";
import { useGlobalContext } from "../../Pages/Authentication/AuthProvider";
import axios from "axios";
import { useHistoryFetch } from "../UtilsComponents/UtilsComponents";

export const ReminderComponents = () => {
  const { userHistory } = useHistoryFetch();

  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    setUpdates(
      userHistory.slice(userHistory.length - 2, userHistory.length).reverse()
    );
  }, [userHistory]);



  function formatDateTime(datetimeString) {
    const date = new Date(datetimeString);
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    return formattedDate;
  }

  return (
    // <!-- reminders_notification -->
    <div className={styles.reminders_notification}>
      <div className={styles.reminders_headers}>
        <span className={styles.bolder}> Notifications</span>
        <i>
          <span>🔔</span>
        </i>
      </div>

      {updates.map((update) => (
        <div className={styles.card} key={update.id}>
          <div className={styles.event_holder}>
            <span className={styles.speaker_icon}>📲</span>
            <div className={styles.events}>
              <span className={styles.bolder}>{update.prediction}</span>
              <span className={styles.time}>
                {formatDateTime(update.timestamp)}
              </span>
            </div>
          </div>
          <i>
            <span className={styles.three_dot_icon}> ❕ </span>
          </i>
        </div>
      ))}
    </div>
  );
};
