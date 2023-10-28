import React from "react";

interface TimerPartProps {
  value: string;
  text: string;
  hideWhenZero?: boolean;
}

const TimerPart: React.FC<TimerPartProps> = ({
  value,
  text,
  hideWhenZero = false
}: TimerPartProps) => {
  if (hideWhenZero && value === "00") {
    return null;
  }
  return (
    <div className="flex flex-row pr-8">
      {value}
      <div className="text-4xl pt-12">{text}</div>
    </div>
  );
};

export default TimerPart;
