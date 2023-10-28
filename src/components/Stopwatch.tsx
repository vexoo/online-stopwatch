import React, { useState, useEffect } from "react";
import Button from "./Button";

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

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    const millisecondsPart = (milliseconds % 1000)
      .toString()
      .padStart(3, "0")
      .slice(0, 2);
    return `${minutes}m : ${seconds < 10 ? "0" : ""}${seconds}s : ${millisecondsPart}ms`;
  };

  return (
    <div className="">
      <div className="font-mono text-8xl min-h-[500px] flex flex-col justify-center items-center resize-both relative">
        {formatTime(elapsedTime)}
      </div>
      <div className="space-x-4">
        <Button onClick={handleStart} text="START" />
        <Button onClick={handleStop} text="STOP" />
        <Button onClick={handleReset} text="RESET" />
      </div>
    </div>
  );
};

export default Stopwatch;

