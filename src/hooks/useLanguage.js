import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../lib/store/slices/clientSlice";
import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";
import data from "../lib/data.json";
const useLanguage = () => {
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.client);

  const [, setLocalLanguage] = useLocalStorage({
    key: "language",
    defaultValue: language,
  });

  useEffect(() => {
    setLocalLanguage(language);
  }, [language, setLocalLanguage]);

  const t = (key) => {
    const keys = key.split(".");
    let result = data[language];
    for (const k of keys) {
      if (result === undefined || result === null) return key;
      result = result[k];
    }
    return result || key;
  };
  const handleLanguage = (newLanguage) => {
    dispatch(setLanguage(newLanguage));
  };
  return { t, language, handleLanguage };
};

export { useLanguage };
