import { useState } from "react";

const initialState = {
  alertInfo: false,
  alertInfoText:
    "Welcome to General Bank! Your trusted partner in financial services.",
};

export const HeaderAlertInfo = () => {
  const [alertInfo, setAlertInfo] = useState(initialState);

  return (
    <section className="header__alert">
      <span className="header__alert-icon">
        <i className="fa-solid fa-circle-info"></i>
      </span>
      <p className="header__alert-info">{alertInfo.alertInfoText}</p>
      <span
        className="header__alert-close"
        onClick={() => setAlertInfo(initialState)}
      >
        <i className="fa-solid fa-xmark header__alert-close"></i>
      </span>
    </section>
  );
};
