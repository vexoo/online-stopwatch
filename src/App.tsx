import { useState, useEffect } from "react";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function App() {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    prefersDarkMode ? true : false
  );

  const handleDarkMode = (isDark: boolean) => {
    setIsDarkMode(isDark);
    //setLocalTheme(isDark ? 'dark' : 'light');
  };

  const handleDarkModeButtonName = () => {
    if (isDarkMode) return "light mode";
    else return "dark mode";
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <p className="text-2xl">Stopwatch</p>
      <button
        className="cursor-pointer rounded-md border-none bg-gray-500 px-3 py-1 text-center text-sm uppercase tracking-wide text-gray-500 text-white shadow-md dark:text-gray-300"
        onClick={() => handleDarkMode(!isDarkMode)}
      >
        {handleDarkModeButtonName()}
      </button>
      <Stopwatch />
    </>
  );
}

export default App;
