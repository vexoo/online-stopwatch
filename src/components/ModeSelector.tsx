import React from "react";
import Button from "./Button";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import { changeStyle } from "../reducers/styleReducer";

interface ModeSelectorProps {
  mode: "stopwatch" | "countdown";
  setMode: (mode: "stopwatch" | "countdown") => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, setMode }) => {
  const style = useAppSelector(state => state.style.style);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-row justify-center items-center mr-3 text-xl">
      <Button
        onClick={() => setMode("stopwatch")}
        text="Stopwatch"
        textButton={true}
        className={`mr-2 ${mode === "stopwatch" ? "underline" : ""}`}
      />
      <p className="mr-2">/</p>
      <Button
        onClick={() => setMode("countdown")}
        text="Timer"
        textButton={true}
        className={`${mode === "countdown" ? "underline" : ""}`}
      />
    </div>
  );
};

export default ModeSelector;
