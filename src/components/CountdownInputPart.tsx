import React from "react";
import { useAppSelector } from "../reducers/hooks";

interface CountdownInputPartProps {
  value: string;
  maxValue: number;
  text: string;
  hideColon?: boolean;
	editable?: boolean; 
  setValue: (value: number) => void;
}

const CountdownInputPart: React.FC<CountdownInputPartProps> = ({
  value,
  maxValue,
  text,
  hideColon = true,
	editable = true,
  setValue
}: CountdownInputPartProps) => {
  const style = useAppSelector(state => state.style.style);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = event.target.value;
    inputValue = inputValue.replace(/^0+/, "");

    let intValue = parseInt(inputValue, 10);

    if (isNaN(intValue) || intValue < 0) {
      intValue = 0;
    } else if (intValue > maxValue) {
      intValue = maxValue;
    }

    setValue(intValue);
  };

  return (
    <div className={`flex flex-row ${style === 2 ? "" : "pr-8"}`}>
      {editable ? (
        <input
          className="w-32 text-black text-right"
          type="number"
          placeholder="0"
          onChange={handleInputChange}
          value={value}
        />
      ) : (
        <div>{value}</div>
      )}
      {style === 2 && !hideColon && ":"}
      {style !== 2 && <div className="text-4xl pt-12">{text}</div>}
    </div>
  );
};

export default CountdownInputPart;
