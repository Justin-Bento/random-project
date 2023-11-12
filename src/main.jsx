import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Create the <main> element dynamically
const mainElement = document.createElement("main");
document.body.appendChild(mainElement);

// Render the React application inside the <main> element
ReactDOM.createRoot(mainElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
