import { useState } from "react";

const useToken = () => {
  function getToken() {
    const userToken = localStorage.getItem("token"); //https://javascript.info/localstorage
    return userToken;
  }

  const [token, setToken] = useState(getToken());

  function saveToken(userToken) {
    localStorage.setItem("token", userToken);
    setToken(userToken);
  }

  function removeToken() {
    localStorage.removeItem("token");
    setToken(null);
    console.log("token removed from local storage")
  }

  return {
    saveToken:saveToken,
    token,
    removeToken,
  };
}

export default useToken;
