import React from "react";
import { ThemeButtonProps } from "../types";
import clsx from "clsx";


const ThemeButton = ({onClick,color}:ThemeButtonProps) => {
  return (
    <div onClick={onClick} className="h-10 w-10 rounded-full border cursor-pointer p-1">
        <div className={clsx(" h-full w-full rounded-full",color? `bg-${color}`:"bg-primary-main")}></div>
    </div>
  );
};

export default ThemeButton;
