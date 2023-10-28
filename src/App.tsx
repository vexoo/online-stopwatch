import { useState, useEffect } from "react";
import "./App.css";
import TextBox from "./components/TextBox";
import Stopwatch from "./components/Stopwatch";

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

/*
import React, { useState, useEffect } from 'react';
import { getLocalTheme, setLocalTheme } from '../../../util/localStorageHelper';
import BaseModal from '../BaseModal/BaseModal';
import SettingsToggle from './SettingsToggle';
import { settingsModalTitle } from '../../../util/strings';

interface SettingsModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, handleClose }) => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    getLocalTheme() ? getLocalTheme() === 'dark' : prefersDarkMode ? true : false
  );

  const handleDarkMode = (isDark: boolean) => {
    setIsDarkMode(isDark);
    setLocalTheme(isDark ? 'dark' : 'light');
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <BaseModal title={settingsModalTitle} isOpen={isOpen} handleClose={handleClose}>
      <div className='mt-2 flex flex-col divide-y'>
        <SettingsToggle
          settingName='Dark Mode'
          flag={isDarkMode}
          handleFlag={handleDarkMode}
        />
      </div>
    </BaseModal>
  );
};

export default SettingsModal;
*/
