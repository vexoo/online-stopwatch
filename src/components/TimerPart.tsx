import React from "react";
import { useAppSelector } from "../reducers/hooks";

interface TimerPartProps {
  value: string;
  text: string;
  hideWhenZero?: boolean;
  hideColon?: boolean;
}

const TimerPart: React.FC<TimerPartProps> = ({
  value,
  text,
  hideWhenZero = false,
  hideColon = false
}: TimerPartProps) => {
  const style = useAppSelector(state => state.style.style);

  if (hideWhenZero && value === "00") return null;

  return (
    <div className={`flex flex-row ${style === 2 ? "" : "pr-8"}`}>
      {value}
      {style === 2 && !hideColon && ":"}
      {style !== 2 && <div className="text-4xl pt-12">{text}</div>}
    </div>
  );
};

export default TimerPart;
