import React, { useEffect, useRef, useState } from "react";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import {
  startTimer,
  stopTimer,
  resetTimer,
  setTimer,
  decrementTime
} from "../reducers/countdownReducer";
import Button from "./Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import BlockIcon from "@mui/icons-material/Block";
import CountdownInputPart from "./CountdownInputPart";
import TimerPart from "./TimerPart";
import { formatTimer } from "../utils/helpers";

const Countdown: React.FC = () => {
  const isRunning = useAppSelector(state => state.countdown.isRunning);
  const timeLeft = useAppSelector(state => state.countdown.timeLeft);
  const audioFile = useAppSelector(state => state.alert.audioFile);
  const soundLevel = useAppSelector(state => state.alert.soundLevel);
  const style = useAppSelector(state => state.style.style);
  const dispatch = useAppDispatch();

  const [inputHours, setInputHours] = useState<number>(0);
  const [inputMinutes, setInputMinutes] = useState<number>(0);
  const [inputSeconds, setInputSeconds] = useState<number>(0);
  const [inputMilliseconds, setInputMilliseconds] = useState<number>(0);

  const [hours, setHours] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");
  const [seconds, setSeconds] = useState<string>("00");
  const [milliseconds, setMilliseconds] = useState<string>("00");

  const [editable, setEditable] = useState<boolean>(true);

  const [playSound, setPlaySound] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
    if (audioRef.current) {
      const volume = soundLevel;
      audioRef.current.volume = volume;
      console.log(audioRef.current.volume);
    }
  }, [soundLevel]);


  useEffect(() => {
    let timer: number | null = null;

    if (isRunning) {
      if (timeLeft === 0) {
        dispatch(stopTimer());
        setPlaySound(true);
      }
      const formattedTime = formatTimer(timeLeft);

      setHours(formattedTime.hours);
      setMinutes(formattedTime.minutes);
      setSeconds(formattedTime.seconds);
      setMilliseconds(formattedTime.milliseconds);
      timer = window.setInterval(() => {
        dispatch(decrementTime());
      }, 10);
    } else if (timer !== null) {
      window.clearInterval(timer);
    }

    return () => {
      if (timer !== null) {
        window.clearInterval(timer);
      }
    };
  }, [isRunning, dispatch, timeLeft]);

  useEffect(() => {
    const totalMilliseconds =
      inputHours * 3600000 +
      inputMinutes * 60000 +
      inputSeconds * 1000 +
      inputMilliseconds;
    dispatch(setTimer(totalMilliseconds));
  }, [inputHours, inputMinutes, inputSeconds, inputMilliseconds]);

  const handleStart = () => {
    if (timeLeft > 0) {
      dispatch(startTimer());
      setEditable(false);
    }
  };

  const handleReset = () => {
    dispatch(resetTimer());
    setEditable(true);
    setPlaySound(false);
    setInputHours(0);
    setInputMinutes(0);
    setInputSeconds(0);
    setInputMilliseconds(0);
  };

  return (
    <div className="">
      <div
        className={`font-mono text-8xl min-h-[450px] flex flex-row justify-center items-center 
				${style === 1 && "ml-16"}`}
      >
        {editable ? (
          <>
            <CountdownInputPart
              value={inputHours.toString()}
              maxValue={99}
              text="h"
              setValue={setInputHours}
            />
            <CountdownInputPart
              value={inputMinutes.toString()}
              maxValue={59}
              text="m"
              setValue={setInputMinutes}
            />
            <CountdownInputPart
              value={inputSeconds.toString()}
              maxValue={59}
              text="s"
              setValue={setInputSeconds}
            />
            <CountdownInputPart
              value={inputMilliseconds.toString()}
              maxValue={100}
              text="ms"
              setValue={setInputMilliseconds}
              hideColon={true}
              editable={false}
            />
          </>
        ) : (
          <>
            <TimerPart value={hours} text="h" />
            <TimerPart value={minutes} text="m" />
            <TimerPart value={seconds} text="s" />
            <TimerPart value={milliseconds} text="ms" hideColon={true} />
          </>
        )}
      </div>
      <div className="space-x-4">
        <Button onClick={() => handleStart()} icon={<PlayArrowIcon />} />
        <Button onClick={() => dispatch(stopTimer())} icon={<StopIcon />} />
        <Button onClick={() => handleReset()} icon={<BlockIcon />} />
      </div>
      {playSound && (
        <audio ref={audioRef} autoPlay>
          <source src={audioFile} type="audio/wav" />
        </audio>
      )}
    </div>
  );
};

export default Countdown;
