export const AuthInputField = ({
  label,
  name,
  type,
  errorMessage,
  value,
  onChange,
}) => {
  return (
    <fieldset className="form__field">
      <label className="label__field" htmlFor="email">
        {label}
      </label>
      <input
        name={name}
        id={name}
        className="input__field"
        type={type}
        value={value}
        onChange={onChange}
        required
      />

      {errorMessage && <span className="error__message">{errorMessage}</span>}
    </fieldset>
  );
};
