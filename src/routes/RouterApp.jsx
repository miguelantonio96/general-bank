import { Route, Routes } from "react-router";
import { LayoutBankingApp } from "../layout/LayoutBankingApp";
import { AboutPage, HomePage, ServicesPage } from "../pages";
import {
  LoginPage,
  RegisterFaceRecognitionView,
  RegisterFinishPage,
  RegisterPage,
} from "../auth/pages";
import { ContactPage } from "../pages/ContactPage";
import { UnderConstructionPage } from "../pages/UnderConstructionPage";

export const RouterApp = () => {
  return (
    <Routes>
      <Route element={<LayoutBankingApp />}>
        {/* Rutas de autenticación */}
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route
          path="auth/register/step-2"
          element={<RegisterFaceRecognitionView />}
        />
        <Route path="auth/register/step-3" element={<RegisterFinishPage />} />
        <Route path="auth/login" element={<LoginPage />} />
        <Route path="/auth/*" element={<LoginPage />} />
        {/* Rutas de la aplicación */}
        <Route path="/" element={<HomePage />} />
        <Route path="home/about" element={<AboutPage />} />
        <Route path="home/contact-us" element={<ContactPage />} />
        {/* 
        <Route path="services/personal-banking" element={<ServicesPage />} />
        <Route path="services/credit-cards" element={<ServicesPage />} />
        <Route path="services/loans" element={<ServicesPage />} />
        <Route path="services/business-banking" element={<ServicesPage />} />
        <Route path="services/investment-services" element={<ServicesPage />} />
        */}

        <Route path="/*" element={<HomePage />} />
        <Route
          path="/services/under-construction"
          element={<UnderConstructionPage />}
        />
      </Route>
    </Routes>
  );
};
