import React, { useState } from "react";
import { CardProps, CardTypeProps } from "../types";
import { EyeIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const Card = ({
  name,
  img,
  typeText,
  typeIcon,
  className,
  showHover,
  hoverColor,
  onView,
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={clsx("p-5 relative group h-full", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white rounded-lg p-[10px] relative">
        <div className="rounded flex justify-center bg-[#F1F1F1] px-5 w-full">
          <img
            src={img}
            alt="Pokemon Logo"
            className="h-full -translate-y-1/3"
          />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-bold py-2">{name}</h2>
          {typeText && typeIcon && (
            <div className="flex items-center gap-5">
              <CardType text={typeText} icon={typeIcon} />
              <CardType text={typeText} icon={typeIcon} />
            </div>
          )}

          {showHover && isHovered && (
            <div
              onClick={onView}
              className=" cursor-pointer absolute -bottom-11 w-full z-10 left-0 right-0 bg-white rounded py-2 px-3 text-white flex justify-between items-center"
            >
              <div
                className={clsx(
                  "  w-full rounded-lg py-2 px-3 text-white flex justify-between items-center",
                  hoverColor ? `bg-${hoverColor}` : "bg-primary-main"
                )}
              >
                <span className="text-sm">view pokemon</span>
                <EyeIcon className="h-4 w-4" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const CardType = ({ text, icon }: CardTypeProps) => {
  return (
    <div className="flex items-center justify-center rounded bg-secondary-main px-1 gap-1">
      <img src={icon} alt={text} className="h-4 w-4" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

export default Card;
