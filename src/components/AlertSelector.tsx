import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import { changeStyle } from "../reducers/styleReducer";
import { setAudioFile, setSoundLevel } from "../reducers/alertReducer";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { audioFilesList } from "../utils/helpers";

interface AlertSelectorProps {
  audioRef: React.RefObject<HTMLAudioElement>;
}

const AlertSelector: React.FC<AlertSelectorProps> = ({
  audioRef
}: AlertSelectorProps) => {
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
    <div className="flex flex-row  text-xl ml-auto">
      <div className="flex flex-col ml-auto">
        <div className="flex flex-row">
          <Button
            onClick={() =>  audioRef.current?.play()}
            icon={<PlayArrowIcon />}
            className="mr-1"
          />
          <select
            className="dark:text-black"
            value={audioFile}
            onChange={handleAudioChange}
          >
            {Object.entries(audioFilesList).map(([name, path]) => (
              <option key={path} value={path}>
                {name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-row">
          <VolumeUpIcon className="mt-1" />
          <input
            className="w-25"
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
    </div>
  );
};

export default AlertSelector;
