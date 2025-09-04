export const ServicesPage = () => {
  return (
    <div className="services__container">
      <h1>Our Services</h1>
      <p>Explore our range of services to meet your financial needs.</p>

      <section className="services__content">
        <div className="service__card bg-rose-900 ">
          <img
            src="/img/cuenta_corriente.png"
            alt="checking account image"
            className="service__image"
          />
          <h2>Checking Account</h2>
          <p>Manage your daily expenses with ease.</p>
        </div>
        <div className="service__card bg-blue-900 ">
          <img
            src="/img/cuenta_corriente.png"
            alt="savings account image"
            className="service__image"
          />
          <h2>Savings Account</h2>
          <p>Grow your savings with our competitive interest rates.</p>
        </div>
        <div className="service__card bg-green-900 ">
          <img
            src="/img/tarjeta_credito.png"
            alt="credit card image"
            className="service__image"
          />
          <h2>Credit Card</h2>
          <p>Get the financial support you need for your everyday life.</p>
        </div>
        <div className="service__card bg-yellow-900 ">
          <img
            src="/img/cuenta_empresa.png"
            alt="business account image"
            className="service__image"
          />
          <h2>Business Account</h2>
          <p>Solutions tailored for your business needs.</p>
        </div>
      </section>
    </div>
  );
};
