import { useState } from "react";

const useLocalStorage = ({ key, defaultValue }) => {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  });

  const setLocalValue = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };
  return [value, setLocalValue];
};

export { useLocalStorage };
