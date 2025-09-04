export const ButtonBankingApp = ({
  name,
  type,
  className,
  onClick,
  disabled,
  id,
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      id={id}
      data-boton-enviar
      type={type}
      disabled={disabled}
    >
      {name}
    </button>
  );
};
