import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import Button from "./Button";
import { changeStyle } from "../reducers/styleReducer";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import StyleSelector from "./StyleSelector";

const Header: React.FC = () => {
  const style = useAppSelector(state => state.style.style);
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    prefersDarkMode ? true : false
  );

  const handleDarkMode = (isDark: boolean) => {
    setIsDarkMode(isDark);
  };

  const handleDarkModeButtonIcon = () => {
    if (isDarkMode) return <LightModeIcon />;
    else return <DarkModeIcon />;
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="header">
      <div className="header-content short:h-auto">
        <div className="flex">
          <Button
            onClick={() => handleDarkMode(!isDarkMode)}
            icon={handleDarkModeButtonIcon()}
          />
        </div>
        <p className="text-3xl font-bold uppercase">Stopwatch</p>
        <StyleSelector />
      </div>
      <hr className="hr-line" />
    </div>
  );
};

export default Header;
