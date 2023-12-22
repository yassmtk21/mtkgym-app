import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ActionProvider } from "./components/context/ActionContext";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ActionProvider>
      <RouterProvider router={router} />
    </ActionProvider>
  </React.StrictMode>
);
