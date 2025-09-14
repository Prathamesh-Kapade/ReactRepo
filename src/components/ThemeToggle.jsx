import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";

function ThemeToggle() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;