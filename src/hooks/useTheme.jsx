// src/hooks/useTheme.js
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/actions/themeActions";

const useTheme = () => {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleTheme());
  };

  return { isDarkTheme, toggle };
};

export default useTheme;
