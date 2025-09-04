import { Outlet } from "react-router";
import { Banner, Footer, Header, HeaderAlertInfo } from "../components";
import { BreadCrumb } from "./components/Breadcrumb";
import { PrivacyCodePopUp } from "../components/PrivacyCodePopUp";
import { PrivacyCodeModal } from "../components/PrivacyCodeModal";
import { useContext } from "react";
import { ContextApp } from "../context/context";
import ForumIcon from "@mui/icons-material/Forum";

export const LayoutBankingApp = () => {
  const { preferencesPolicy } = useContext(ContextApp);
  console.log(preferencesPolicy);

  return (
    <div className="banking-app__layout__container">
      <HeaderAlertInfo />
      <Header />
      <Banner />
      <BreadCrumb />

      <main className="main__container">
        <Outlet />
      </main>

      <PrivacyCodePopUp />
      {preferencesPolicy?.isModal && <PrivacyCodeModal />}

      <span className="chat__button-layout">
        <a href="https://chat.openai.com/" target="_blank" rel="noreferrer">
          <ForumIcon style={{ fontSize: 50, color: "#0a66c2" }} />
        </a>
      </span>

      <Footer />
    </div>
  );
};
