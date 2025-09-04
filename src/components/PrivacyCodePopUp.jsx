import { useContext, useState } from "react";
import { Link } from "react-router";
import { ContextApp } from "../context/context";

export const PrivacyCodePopUp = () => {
  const [isPopUpPolicy, setIsPopUpPolicy] = useState(true);
  const { handlePreferencesModal } = useContext(ContextApp);

  const handlePopUpPrivacyCode = () => {
    setIsPopUpPolicy(!isPopUpPolicy);
  };
  const handlePopUpClose = () => {
    setIsPopUpPolicy(false);
  };

  return (
    <div
      className={
        isPopUpPolicy
          ? "onetrust-privacy__parent"
          : "onetrust-privacy__pop-up__hidden"
      }
    >
      <div className="onetrust__close-btn">
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          onClick={() => handlePopUpClose()}
        >
          &times;
        </button>
      </div>
      <div className="onetrust-privacy__content">
        <div className="onetrust-policy__text">
          <p>
            By clicking &quot;Accept All&quot;, you understand and agree that we
            and our partners may use cookies and other similar technologies on
            our sites. These technologies may collect information about you,
            including browsing patterns, to enhance site navigation, analyze
            site usage, and assist in our marketing efforts. Click &quot;Manage
            Preferences&quot; to change or deny the use of optional cookies. To
            learn more about changing your preferences at any time, please click
            the following link.{" "}
            <Link rel="stylesheet" href="" className="span">
              Privacy preference center
            </Link>
          </p>
        </div>

        <div className="onetrust-privacy__buttons">
          <button
            className="btn btn-primary btn-block"
            onClick={() => handlePopUpPrivacyCode()}
          >
            Accept All
          </button>

          <button
            className="btn btn-primary btn-block"
            onClick={() => handlePreferencesModal()}
          >
            Manage Preferences
          </button>
        </div>
      </div>
    </div>
  );
};
