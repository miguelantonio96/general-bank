import { ButtonBankingApp } from "../../ui/components/ButtonBankingApp";
import { AuthInputField } from "../components/AuthInputField";
import "./auth-index.css";

export const LoginPage = () => {
  return (
    <section className="login__section">
      <div className="login__container">
        <h2 className="form__title">Sign In</h2>
        <p className="form__text">
          Please enter your email and password to access your account.
        </p>

        <form className="form__fields__container" data-formulario>
          <AuthInputField label="Email" name="email" type="email" />
          <AuthInputField label="Password" name="password" type="password" />

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
          <div className="flex justify-center items-center gap-1 m-5">
            <span className="error__message"></span>
          </div>
        </form>

        <p className="form__text">
          Don&apos;t have an account?{" "}
          <a href="/auth/register-1" className="formulario__link">
            {" "}
            Create an account
          </a>
        </p>
      </div>
    </section>
  );
};
