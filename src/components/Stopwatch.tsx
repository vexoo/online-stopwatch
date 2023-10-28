import React, { useState, useEffect } from "react";
import Button from "./Button";
import TimerPart from "./TimerPart";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import BlockIcon from "@mui/icons-material/Block";

const Stopwatch: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    let timer: number | null = null;

    if (isRunning) {
      timer = window.setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 10);
      }, 10);
    } else if (timer !== null) {
      window.clearInterval(timer);
    }

    return () => {
      if (timer !== null) {
        window.clearInterval(timer);
      }
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatValue = (value: number, divisor: number) => {
    return ("0" + Math.floor((value / divisor) % 60)).slice(-2);
  };

  const formatTimer = (currentTimer: number) => {
    const hours = formatValue(currentTimer, 600000);
    const minutes = formatValue(currentTimer, 60000);
    const seconds = formatValue(currentTimer, 1000);
    const milliseconds = formatValue(currentTimer, 10);

    return { hours, minutes, seconds, milliseconds };
  };

  const { hours, minutes, seconds, milliseconds } = formatTimer(elapsedTime);

  return (
    <div className="">
      <div className="font-mono text-8xl min-h-[500px] flex flex-row justify-center items-center">
        <TimerPart value={hours} text="h" hideWhenZero={true} />
        <TimerPart value={minutes} text="m" />
        <TimerPart value={seconds} text="s" />
        <TimerPart value={milliseconds} text="ms" />
      </div>
      <div className="space-x-4">
        <Button onClick={handleStart} icon={<PlayArrowIcon />} />
        <Button onClick={handleStop} icon={<StopIcon />} />
        <Button onClick={handleReset} icon={<BlockIcon />} />
      </div>
    </div>
  );
};

export default Stopwatch;
