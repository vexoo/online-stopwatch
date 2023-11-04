import React from "react";
import Button from "./Button";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import { changeStyle } from "../reducers/styleReducer";

const StyleSelector: React.FC = () => {
  const style = useAppSelector(state => state.style.style);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col">
      <p className="text-sm">Style</p>
      <div className="flex flex-row">
        <Button
          onClick={() => dispatch(changeStyle(1))}
          text="1"
          className={style === 1 ? "bg-green-700" : ""}
        />
        <Button
          onClick={() => dispatch(changeStyle(2))}
          text="2"
          className={style === 2 ? "bg-green-700" : ""}
        />
      </div>
    </div>
  );
};

export default StyleSelector;
