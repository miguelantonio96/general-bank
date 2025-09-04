import { useEffect } from "react";
import { useRef } from "react";
import { ButtonBankingApp } from "../../ui/components/ButtonBankingApp";
import { AuthInputField } from "../components/AuthInputField";

export const LoginHeaderModal = () => {
  const ref = useRef(null);

  const handleModalClose = () => {
    const modal = document.querySelector(".login__header-modal");
    modal.classList.remove("login__header-modal--show");
    modal.classList.add("login__header-modal--hidden");
  };

  useEffect(() => {
    const modal = document.querySelector(".login__header-modal");

    const handleClickOutside = (event) => {
      if (!ref.current.contains(event.target)) {
        modal.classList.remove("login__header-modal--show");
        modal.classList.add("login__header-modal--hidden");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="login__header-modal" ref={ref}>
      <span
        className="login__header-modal__close"
        onClick={() => handleModalClose()}
      >
        X
      </span>
      <section className="login__modal-container">
        {/* <h2 className="form__title">Sign In</h2> */}
        <form className="form__fields__container" data-formulario>
          <AuthInputField label="Email" name="email" type="email" />
          <AuthInputField label="Password" name="password" type="password" />

          <div className="w-full flex items-center justify-between">
            <fieldset className="flex items-center justify-center gap-1 m-5">
              <input name="terminos" type="checkbox" required />
              <p>Remember Me</p>
            </fieldset>

            <ButtonBankingApp
              name="Sign In"
              type="submit"
              className="banking__button banking__button__blue"
              onClick={() => (location.href = "/home")}
            />
          </div>
          <div className="flex justify-center items-center gap-1 m-5">
            <span className="error__message"></span>
          </div>
        </form>

        <p className="form__text">
          Don&apos;t have an account?{" "}
          <a href="/auth/register" className="formulario__link">
            {" "}
            Create an account
          </a>
        </p>
      </section>
    </div>
  );
};
