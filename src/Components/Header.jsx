// src/components/Header.js
import React from "react";
import useTheme from "../hooks/useTheme";

const Header = () => {
  const { isDarkTheme, toggle } = useTheme();

  return (
    <header className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <h1>Task Manager</h1>
      <button onClick={toggle}>Toggle Theme</button>
    </header>
  );
};

export default Header;
