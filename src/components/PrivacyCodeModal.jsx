import { useContext } from "react";
import { ContextApp } from "../context/context";

export const PrivacyCodeModal = () => {
  const { handlePreferencesModal } = useContext(ContextApp);

  return (
    <div className="privacy-modal__container">
      <dialog className="privacy-modal__dialog">
        <button
          className="privacy-modal__close-button"
          onClick={() => handlePreferencesModal()}
        >
          X
        </button>

        <div className="privacy-modal__header">
          <h2 className="privacy-modal__dialog__title">Privacy Preferences</h2>
          <p>
            When you visit any website, it may store or retrieve information on
            your browser, in the form of cookies or other similar technologies.
            This information might be about you, your preferences, or your
            device, and is mostly used to make the site work as you expect it
            to. The information does not usually directly identify you, but it
            can give you a more personalized web experience. You can choose not
            to allow some types of cookies and other similar technologies. Click
            on the different category headings to find out more and change your
            settings; however, blocking some of these technologies may impact
            your site experience and the services we are able to offer.{" "}
            <a>Privacy preference center</a>
          </p>
        </div>

        <article className="privacy-modal__dialog__preferences">
          <h3 className="privacy-modal__dialog__subtitle">
            {" "}
            Manage Consent Preferences
          </h3>
          <div className="privacy-modal__dialog__preferences__content">
            <div className="privacy-modal__dialog__preferences__item">
              <span>+</span>
              <p>Strictly Necessary Cookies</p>
              <button>switch</button>
            </div>
            <div className="privacy-modal__dialog__preferences__item">
              <span>+</span>
              <p>Performance and Analytics Cookies</p>
              <button>switch</button>
            </div>
            <div className="privacy-modal__dialog__preferences__item">
              <span>+</span>
              <p>Functional Cookies</p>
              <button>switch</button>
            </div>
            <div className="privacy-modal__dialog__preferences__item">
              <span>+</span>
              <p>Targeting Cookies</p>
              <button>switch</button>
            </div>
          </div>
        </article>

        <div className="privacy-modal__dialog__buttons">
          <button
            className="privacy-modal__dialog__buttons__save"
            onClick={() => console.log("save preferences")}
          >
            Save Preferences
          </button>
          <button
            className="privacy-modal__dialog__buttons__accept"
            onClick={() => console.log("accept all")}
          >
            Accept All
          </button>
        </div>
      </dialog>
    </div>
  );
};
