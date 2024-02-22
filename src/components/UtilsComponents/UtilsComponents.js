import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'
export const useHistoryFetch = (url) => {
  const [userDetails, setUserDetails] = useState(null);
  const [userHistory, setUserHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = useCallback(
    async (id) => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/get_histories/${id}`
        );
        if (response.data) {
          setUserHistory(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log("error fetching user history", error);
        setLoading(false);
      }
    },
    []
  );

    useEffect(() => {
      fetchHistory(localStorage.getItem("id"));
      setUserDetails([
        localStorage.getItem("username"),
        localStorage.getItem("occupation"),
        localStorage.getItem("email"),
      ]);
    }, []);

    return {
        loading,setLoading,userDetails,userHistory,
    }
}