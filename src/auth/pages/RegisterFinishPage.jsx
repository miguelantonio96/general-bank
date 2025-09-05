export const RegisterFinishPage = () => {
  return (
    <section>
      <form className="formulario">
        <div className="form__container">
          <img
            src="/img/status-3.png"
            alt="Step three of three"
            className="face-recognition__stepper"
          />
          <h2 className="form__title">Great!</h2>

          <img
            src="/img/icon_celebracion.png"
            alt="Celebration icon"
            className="open-camera__button"
          />

          <p className="formulario__texto-secundario">
            The account is now created and all your data will be sent to your
            email.
            <b className="formulario__texto--negrito">
              {" "}
              Please confirm the link
            </b>{" "}
            sent there to start using your account right away!
          </p>

          <p className="formulario__texto-secundario">
            If you want to download our app, scan the QR Code below with your
            phone&apos;s camera!
          </p>

          <img
            src="/img/qr-code.png"
            alt="QR Code"
            className="open-camera__button qr"
          />
        </div>
      </form>
    </section>
  );
};
