import React from "react";
import Button from "./Button";
import { useAppDispatch } from "../reducers/hooks";
import { resetTimer } from "../reducers/stopwatchReducer";

interface ModeSelectorProps {
  mode: "stopwatch" | "countdown";
  setMode: (mode: "stopwatch" | "countdown") => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, setMode }) => {
  const dispatch = useAppDispatch();

  const switchToStopwatch = () => {
    setMode("stopwatch");
    dispatch(resetTimer());
  };

  const switchToCountdown = () => {
    setMode("countdown");
    dispatch(resetTimer());
  };

  return (
    <div className="flex flex-col justify-center items-center text-xl">
      <div className="button-container">
        <Button
          onClick={() => switchToStopwatch()}
          text="Stopwatch"
          textButton={true}
          className={`mr-2 ${mode === "stopwatch" && "underline"}`}
        />
        <p className="mr-2">/</p>
        <Button
          onClick={() => switchToCountdown()}
          text="Timer"
          textButton={true}
          className={`${mode === "countdown" && "underline"}`}
        />
      </div>
    </div>
  );
};

export default ModeSelector;
