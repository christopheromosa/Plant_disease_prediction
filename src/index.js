import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import AuthProvider from "./Pages/Authentication/AuthProvider";
import "primeicons/primeicons.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
