import { useState } from "react";
import { ButtonBankingApp } from "../../ui/components/ButtonBankingApp";
import { AuthInputField } from "../components/AuthInputField";

export const RegisterPage = () => {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <section className="formulario">
      <div className="form__container">
        <img
          src="../img/status-1.png"
          alt="Step one of three"
          className="face-recognition__stepper"
        />
        <h2 className="form__title">
          Complete the fields below to create your account!
        </h2>
      </div>

      <form className="form__fields__container" data-formulario>
        <AuthInputField
          label="Full Name"
          type="text"
          name="userFullName"
          id="user_full_name"
          value={inputValue}
          onChange={handleInputChange}
          minLength="3"
          required
        />
        <AuthInputField
          label="E-mail"
          type="email"
          id="email"
          value={inputValue}
          onChange={handleInputChange}
          minLength="4"
          required
        />

        <AuthInputField
          label="ID Number"
          type="text"
          name="idNumber"
          id="id_number"
          value={inputValue}
          onChange={handleInputChange}
          minLength="11"
          maxLength="13"
          pattern="\d{3}-?\d{7}-?\d{1}"
          required
        />

        <AuthInputField
          label="Date of Birth"
          name="dateOfBirth"
          id="date_of_birth"
          value={inputValue}
          onChange={handleInputChange}
          type="date"
          required
        />

        <fieldset className="form__terms-conditions">
          <input
            name="terms"
            className="terms__input"
            type="checkbox"
            style={{ width: "20px", height: "20px" }}
            required
          />
          <p className="terms__text">
            I have read and understand the conditions for the processing of my
            data described in the <a href="#">Privacy Policy</a>.
          </p>
          <span className="error__message"></span>
        </fieldset>

        <div>
          <ButtonBankingApp
            name="Next"
            type="submit"
            className="banking__button banking__button__blue"
            onClick={() => (location.href = "/auth/register/step-2")}
            id="enviar"
            data-boton-enviar
            disabled={false}
          />

          <span className="error__message"></span>
        </div>
      </form>
    </section>
  );
};
