import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../lib/store/slices/clientSlice";
import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";
const useTheme = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.client);

  const [, setTheme] = useLocalStorage({
    key: "theme",
    defaultValue: theme,
  });

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

    setTheme(theme);
  }, [theme, setTheme]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  return { handleToggleTheme, theme };
};

export { useTheme };
