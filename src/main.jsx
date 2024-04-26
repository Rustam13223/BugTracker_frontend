import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssVarsProvider } from "@mui/joy/styles";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssVarsProvider defaultMode="dark">
        <App />
      </CssVarsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
