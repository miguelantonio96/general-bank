export const Footer = () => {
  return (
    <footer className="footer__container">
      <section className="pie_pagina__empresa">
        <h2 className="pie_pagina__titulo">GeneralBank</h2>
        <ul className="pie_pagina__lista">
          <li>
            <a href="/about" className="pie_pagina__link">
              About
            </a>
          </li>
          <li>
            <a href="#" className="pie_pagina__link">
              Frequently Asked Questions
            </a>
          </li>
          <li>
            <a href="#" className="pie_pagina__link">
              History
            </a>
          </li>
        </ul>
      </section>
      <section className="pie_pagina__servicios">
        <h2 className="pie_pagina__titulo">Services</h2>
        <ul className="pie_pagina__lista">
          <li>
            <a href="#" className="pie_pagina__link">
              Checking Account
            </a>
          </li>
          <li>
            <a href="#" className="pie_pagina__link">
              Business Account
            </a>
          </li>
          <li>
            <a href="#" className="pie_pagina__link">
              Credit Card
            </a>
          </li>
        </ul>
      </section>
      <section className="pie_pagina__contato">
        <h2 className="pie_pagina__titulo">Contact</h2>
        <ul className="pie_pagina__lista">
          <li>
            <a href="#" className="pie_pagina__link">
              0800 444 General
            </a>
          </li>
          <li>
            <a href="#" className="pie_pagina__link">
              ayuda@Generalbank.com
            </a>
          </li>
          <li>
            <a href="#" className="pie_pagina__link">
              defensoria@Generalbank.com
            </a>
          </li>
        </ul>
      </section>
      <section className="pie_pagina__redes-sociales">
        <h2 className="pie_pagina__titulo">Access our social networks</h2>
        <ul className="pie_pagina__lista redes-sociales__lista">
          <li>
            <img src="/img/facebook.png" alt="facebook icon" />
          </li>
          <li>
            <img src="/img/youtube.png" alt="youtube icon" />
          </li>
          <li>
            <img src="/img/whatsapp.png" alt="whatsapp icon" />
          </li>
          <li>
            <img src="/img/instagram.png" alt="instagram icon" />
          </li>
        </ul>
        <h2 className="pie_pagina__logo">
          <span className="pie_pagina__logo--negrito">General</span>Bank
        </h2>
      </section>
    </footer>
  );
};
