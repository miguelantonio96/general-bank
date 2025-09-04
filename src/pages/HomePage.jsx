import {
  PromotionsView,
  ServiceSliderView,
  ContentBlockView,
  CreditScoreView,
  BankLocationMap,
} from "./home";
import "./home/views.css";

export const HomePage = () => {
  return (
    <section className="home__container">
      <PromotionsView />
      <ServiceSliderView />
      <ContentBlockView />
      <CreditScoreView />
      <BankLocationMap />
    </section>
  );
};
