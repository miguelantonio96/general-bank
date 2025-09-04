import { useState } from "react";

export const useFormData = () => {
  const [inputValue, setInputValue] = useState({});
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
    isClient: false,
  });

  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.checked,
    });
  };

  const handleBecomeClient = () => {
    setUsers({
      ...users,
      isClient: !users.isClient,
    });

  };

  const reset = () => {
    setInputValue({});
  };

  return {
    users,
    inputValue,
    handleInputChange,
    handleCheckboxChange,
    handleBecomeClient,
    reset,
  };
};
