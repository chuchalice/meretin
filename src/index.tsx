import App from "./Pages/App";
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
