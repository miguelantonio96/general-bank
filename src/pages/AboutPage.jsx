export const AboutPage = () => {
  return (
    <section className="about__container">
      <img
        className="about__bg-img"
        src="/img/about-bg.png"
        alt="About Us imagen"
      />
      <article className="about__content">
        <h2 className="about__subtitle">Who We Are</h2>

        <p className="about__paragraph">
          At AluraBank, we are proud to offer a secure, efficient, and
          user-friendly financial services platform. Since our founding in 2020,
          we have worked hard to become a trusted digital bank, providing our
          clients with access to a wide range of financial products and services
          tailored to their needs.
        </p>
        <p className="about__paragraph">
          Our team is made up of highly skilled professionals. We are a bank
          committed to providing innovative and accessible financial solutions
          for everyone. Our mission is to help our clients achieve their
          financial goals through high-quality products and services, backed by
          a team of dedicated and passionate professionals.
        </p>
      </article>
      <article className="about__content">
        <h1 className="about__subtitle">Our Values</h1>
        <img
          src="/img/our-values.jpg"
          className="w-full h-96"
          alt="About Us imagen"
        />
        <ul className="about__list">
          <li className="about__list-item">
            <strong className="">Customer Focus:</strong> We put our clients at
            the center of everything we do, striving to exceed their
            expectations.
          </li>
          <li className="about__list-item">
            <strong className="">Innovation:</strong> We are constantly looking
            for new ways to improve our products and services, leveraging the
            latest technologies to provide a better experience for our clients.
          </li>
          <li className="about__list-item">
            <strong className="">Security:</strong> We take the security of our
            clients' information and assets very seriously, implementing robust
            measures to protect them.
          </li>
          <li className="about__list-item">
            <strong className="">Transparency:</strong> We believe in being open
            and honest with our clients, providing clear and concise information
            about our products and services.
          </li>
        </ul>
      </article>
      <article className="about__content">
        <h2 className="about__subtitle">Join Us Today</h2>
        <p className="about__paragraph">
          If you're looking for a reliable and innovative digital bank, look no
          further than AluraBank. Join us today and experience the future of
          banking!
        </p>
      </article>
      <article className="about__w-w-offer__container">
        <h2 className="about__subtitle">What We Offer</h2>
        <div className="about__w-w-offer__card">
          <img
            className="about__img"
            src="/img/what-we-offer.jpg"
            alt="About Us imagen"
          />
          <div className="about__w-w-offer__card__content">
            <p className="about__w-w-offer__card__paragraph">
              At AluraBank, we offer a wide range of financial products and
              services designed to meet the needs of our clients. Whether you're
              looking for a simple savings account or a comprehensive investment
              portfolio, we have something for everyone.
            </p>
          </div>
        </div>
        {/* <p className="about__paragraph">
          Our products and services include checking and savings accounts,
          personal and business loans, credit cards, investment accounts, and
          more. We also offer a variety of online and mobile banking options,
          making it easy to manage your finances from anywhere, at any time.
        </p>
        <p className="about__paragraph">
          Our team of experienced professionals is dedicated to providing
          personalized service and support to help you achieve your financial
          goals. We work closely with our clients to understand their unique
          needs and develop customized solutions that meet their specific
          requirements.
        </p>
        <p className="about__paragraph">
          At AluraBank, we are committed to providing high-quality products and
          services that are secure, efficient, and user-friendly. Join us today
          and experience the future of banking!
        </p> */}
      </article>
    </section>
  );
};
