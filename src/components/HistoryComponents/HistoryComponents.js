import React, { useState, useEffect } from "react";
import styles from "./HistoryComponents.module.css";
import axios from "axios";
import { useHistoryFetch } from "../UtilsComponents/UtilsComponents";
export const HistoryComponents = () => {
  const { loading, userDetails, userHistory } = useHistoryFetch();

  function formatDateTime(datetimeString) {
    const date = new Date(datetimeString);
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    return formattedDate;
  }
  const image_path = (image_path) => {
    let path = image_path.split("/");
    return path[1];
  };

  return (
    // <!-- recent_results_table -->
    <div className={styles.recent_results_table}>
      <div className={styles.header}>
        <h2>Recent Results</h2>
        <a href="#">View All</a>
      </div>
      <table>
        <tbody>
          <tr>
            <th>Image</th>
            <th>Prediction</th>
            <th>Confidence</th>
            <th>Preventive Measure</th>
            <th>Timestamp</th>
          </tr>
          {userHistory.map((history) => (
            <tr key={history.id}>
              <td>
                <img
                  src={`http://localhost:8000/images/${history.image_path}`}
                  alt="User history"
                />
              </td>
              <td>{history.prediction}</td>
              <td>{history.confidence}</td>
              <td>{history.preventive_measure}</td>
              <td>{formatDateTime(history.timestamp)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );   

};
