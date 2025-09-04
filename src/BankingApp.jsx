import { BrowserRouter } from "react-router";
import { RouterApp } from "./routes/RouterApp";

function BankingApp() {
  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  );
}

export default BankingApp;
