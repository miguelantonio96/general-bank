import { useState } from "react";
import { ContextApp } from "./context";


export const ContextBankingApp = ({ children }) => {
  const [preferencesPolicy, setPreferencesPolicy] = useState({
    isModal: false,
  });



  const getBankingApp = () => {};

  const handlePreferencesModal = () => {
    setPreferencesPolicy((prevState) => ({
      ...prevState,
      isModal: !prevState.isModal,
    }));
  };

  return (

    <ContextApp.Provider
      value={{
        preferencesPolicy,
        handlePreferencesModal,
        getBankingApp,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
