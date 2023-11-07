import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import { changeStyle } from "../reducers/styleReducer";
import { setAudioFile, setSoundLevel } from "../reducers/alertReducer";

const audioFilesList = {
  "Alert: Error": "audio/alert_error-01.wav",
  "High Intensity": "audio/alert_high-intensity.wav",
  "Simple Alert": "audio/alert_simple.wav"
};

const AlertSelector: React.FC = () => {
  const audioFile = useAppSelector(state => state.alert.audioFile);
  const soundLevel = useAppSelector(state => state.alert.soundLevel);
  const dispatch = useAppDispatch();

  const handleAudioChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setAudioFile(event.target.value));
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);

    dispatch(setSoundLevel(newVolume));
  };

  return (
    <div className="flex flex-col">
      <select
        className="dark:text-black"
        value={audioFile}
        onChange={handleAudioChange}
      >
        <option>Select an audio file</option>
        {Object.entries(audioFilesList).map(([name, path]) => (
          <option key={path} value={path}>
            {name}
          </option>
        ))}
      </select>
      <div className="flex flex-row">
        <input
          className="w-14"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={soundLevel}
          onChange={handleVolumeChange}
        />
        <p className="font-mono text-lg">{soundLevel * 100}%</p>
      </div>
    </div>
  );
};

export default AlertSelector;
