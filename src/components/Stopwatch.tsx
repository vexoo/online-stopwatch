import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import {
  startTimer,
  stopTimer,
  resetTimer,
  incrementTime
} from "../reducers/stopwatchReducer";
import Button from "./Button";
import TimerPart from "./TimerPart";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import BlockIcon from "@mui/icons-material/Block";

const Stopwatch: React.FC = () => {
  const isRunning = useAppSelector(state => state.stopwatch.isRunning);
  const elapsedTime = useAppSelector(state => state.stopwatch.elapsedTime);
  const style = useAppSelector(state => state.style.style);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let timer: number | null = null;

    if (isRunning) {
      timer = window.setInterval(() => {
        dispatch(incrementTime());
      }, 10);
    } else if (timer !== null) {
      window.clearInterval(timer);
    }

    return () => {
      if (timer !== null) {
        window.clearInterval(timer);
      }
    };
  }, [isRunning, dispatch]);

  const formatValue = (value: number, divisor: number) => {
    return ("0" + Math.floor((value / divisor) % 60)).slice(-2);
  };

  const formatTimer = (currentTimer: number) => {
    const hours = formatValue(currentTimer, 600000);
    const minutes = formatValue(currentTimer, 60000);
    const seconds = formatValue(currentTimer, 1000);
    const milliseconds = ("0" + ((currentTimer / 10) % 100)).slice(-2);

    return { hours, minutes, seconds, milliseconds };
  };

  const { hours, minutes, seconds, milliseconds } = formatTimer(elapsedTime);

  return (
    <div className="">
      <div
        className={`font-mono text-8xl min-h-[450px] flex flex-row justify-center items-center 
				${style === 1 && "ml-16"}`}
      >
        <TimerPart value={hours} text="h" hideWhenZero={true} />
        <TimerPart value={minutes} text="m" />
        <TimerPart value={seconds} text="s" />
        <TimerPart value={milliseconds} text="ms" hideColon={true} />
      </div>
      <div className="space-x-4">
        <Button onClick={() => dispatch(startTimer())} icon={<PlayArrowIcon />} />
        <Button onClick={() => dispatch(stopTimer())} icon={<StopIcon />} />
        <Button onClick={() => dispatch(resetTimer())} icon={<BlockIcon />} />
      </div>
    </div>
  );
};

export default Stopwatch;
