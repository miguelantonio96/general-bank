export const BankLocationMap = () => {
  return (
    <section className="bank-location__map__container">
      <div className="bank-location__map__search__container">
        <h3 className="bank-location__map__title">
          Find the nearest branch and visit our facilities
        </h3>
        <p>
          We are located in the main cities of the country to provide you with
          close and accessible service.
        </p>
        <div className="bank-location__map__search__form">
          <input
            type="text"
            placeholder="Search branch"
            className="bank-location__map__search__input"
          />
          <button className="bank-location__map__search__button">Search</button>
        </div>
      </div>
      <iframe
      title="bank-location-map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.009509037168!2d-69.93121162478847!3d18.48605727001151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89e6d67a2a1b%3A0x9d7e3c1e7d3a5e39!2sSanto%20Domingo%2C%20Rep%C3%BAblica%20Dominicana!5e0!3m2!1ses!2sdo!4v1696116224906!5m2!1ses!2sdo"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
    </section>
  );
};
