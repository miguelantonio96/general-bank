import React from "react";
import ReactDOM from "react-dom/client";
import BankingApp from "./BankingApp.jsx";
import "./index.css";
import { ContextBankingApp } from "./context/useContextApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextBankingApp>
      <BankingApp />
    </ContextBankingApp>
  </React.StrictMode>
);
