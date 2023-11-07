import React from "react";
import Button from "./Button";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import { changeStyle } from "../reducers/styleReducer";
import { resetTimer } from "../reducers/stopwatchReducer";
import AlertSelector from "./AlertSelector";

interface ModeSelectorProps {
  mode: "stopwatch" | "countdown";
  setMode: (mode: "stopwatch" | "countdown") => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, setMode }) => {
  //const style = useAppSelector(state => state.style.style);
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
        <p>/</p>
        <Button
          onClick={() => switchToCountdown()}
          text="Timer"
          textButton={true}
          className={`${mode === "countdown" && "underline"}`}
        />
      </div>
      <div className="flex flex-row justify-center items-center text-xl ml-auto">
        {mode === "countdown" && <AlertSelector />}
      </div>
    </div>
  );
};

export default ModeSelector;
