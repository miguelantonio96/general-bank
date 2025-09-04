import { useEffect, useState } from "react";
import { LoadingIcon } from "../../ui/components/LoadingIcon";
const servicesList = [
  {
    title: "Checking & Saving Account",
    description:
      "Grow your savings with our competitive interest rates, and manage your daily expenses with ease.",
    image: "/img/cuenta_corriente.png",
  },

  {
    title: "Credit Card",
    description: "Get the financial support you need for your everyday life.",
    image: "/img/tarjeta_credito.png",
  },
  {
    title: "Business Account",
    description: "Solutions tailored for your business needs.",
    image: "/img/cuenta_empresa.png",
  },
];

export const ServicesView = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setServices(servicesList);
    }, 1000);
  }, []);

  if (services.length === 0) return <LoadingIcon />;
  console.log(services);

  return (
    <section className="services__container">
      <h1>Our Services</h1>
      <p>Explore our range of services to meet your financial needs.</p>

      <section className="services__content">
        {services.map((service) => (
          <div key={service.title} className="service__card-item">
            <h2 className="service__card-title">{service.title}</h2>
            <div className="service__card-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service__info">
              <p className="service__description">{service.description}</p>
              <button className="service-button">Learn More</button>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};
