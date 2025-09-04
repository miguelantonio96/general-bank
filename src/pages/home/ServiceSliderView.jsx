import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useState } from "react";

const servicesListInit = [
  {
    id: 1,
    title: "Credit Cards",
    description: "Explore our range of credit cards tailored to your needs.",
    image: "/img/tarjeta_credito.png",
  },
  {
    id: 2,
    title: "Personal Loans",
    description:
      "Get the financial support you need with our flexible personal loans.",
    image: "/img/personal-loan.jpg",
  },
  {
    id: 3,
    title: "Mortgage",
    description: "Find the right mortgage solution for your needs.",
    image: "/img/hipoteca.png",
  },
  {
    id: 4,
    title: "Auto Loans",
    description:
      "Get the financial support you need with our flexible auto loans.",
    image: "/img/prestamo_auto.png",
  },
  {
    id: 5,
    title: "Investing",
    description: "Explore our range of credit cards tailored to your needs.",
    image: "/img/inversion.png",
  },
  {
    id: 6,
    title: "Business Loans",
    description:
      "Get the financial support you need with our flexible business loans.",
    image: "/img/prestamo_negocio.png",
  },
];

export const ServiceSliderView = () => {
  const [services, setServices] = useState(servicesListInit);

  const handleSlider = (direction) => {
    if (direction === "left") {
      const firstService = services.shift();
      setServices([...services, firstService]);
    } else {
      const lastService = services.pop();
      setServices([lastService, ...services]);
    }
  };
  return (
    <section className="service-view__container">
      <div className="service-view__slider">
        <span
          className="service-view__slider__arrow"
          onClick={() => handleSlider("left")}
        >
          <ArrowBack />
        </span>
        <article className="service__card">
          <div className="service__card__image-container">
            <img
              src={services[0].image}
              alt={services[0].title ? services[0].title : "Service Image"}
              className="service__card__image"
            />
          </div>
          <div className="service__card__info">
            <h2 className="service__card__title">
              {services[0].title ? services[0].title : "Service Title"}
            </h2>
            <p className="service__card__description">
              {services[0].description ? services[0].description : "Explore our range of credit cards tailored to your needs."}
            </p>
            <button
              className="service__card__button"
              onClick={() => (location.href = "/auth/register-1")}
            >
              Apply Now
            </button>
          </div>
        </article>
        <span
          className="service-view__slider__arrow"
          onClick={() => handleSlider("right")}
        >
          <ArrowForward />
        </span>
      </div>
    </section>
  );
};
