/**
 * Entry point of the BugTracker frontend application.
 * Renders the App component inside the root element.
 *
 * @module Main
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
