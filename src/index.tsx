import React from "react";
import ReactDOM from "react-dom/client";
import "../src/Styles/index.scss";
import App from "./app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
