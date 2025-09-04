import { useState } from "react";

export const useBankingApp = () => {
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

  return {
    getBankingApp,
    preferencesPolicy,
    handlePreferencesModal,
  };
};
