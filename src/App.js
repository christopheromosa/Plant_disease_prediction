import React, { useState, useEffect } from "react";
import "./App.css";
import Overview from "./Pages/Overview/Overview";
import Plants from "./Pages/Plants/Plants";
import Recommendation from "./Pages/Recommendation/Recommendation";
import Settings from "./Pages/Settings/Settings";
import ErrorComponents from "./components/ErrorComponents/ErrorComponents";
import Login from "./Pages/Authentication/Login";
import LoginComponents from "./components/LoginComponents/LoginComponents";
import RegisterComponents from "./components/RegisterComponents/RegisterComponents";
import Register from "./Pages/Authentication/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useToken from "./components/AuthenticationComponents/useToken";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginComponents />} />
        <Route path="/register" element={<RegisterComponents />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<ErrorComponents />} />
      </Routes>
    </Router>
  );
}

export default App;
