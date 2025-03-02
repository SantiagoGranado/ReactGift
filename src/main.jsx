import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { GiftProvider } from "./context/GiftContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <GiftProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GiftProvider>
  </AuthProvider>
);
