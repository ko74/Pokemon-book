import React, { useContext } from "react";
import { ThemeModalProps } from "../types";
import { ThemeContext } from "../context/PokemonContext";

const ThemeModal: React.FC<ThemeModalProps> = ({ closeModal }) => {
  const { setThemeColor } = useContext(ThemeContext);

  const handleColorClick = (color: string) => {
    setThemeColor(color);
    closeModal();
  };

  return (
    <div className="text-center rounded-lg">
      <h2 className="text-2xl font-semibold p-2">Theme Modal</h2>
      <div className="flex justify-center gap-4 bg-secondary-main p-5">
        <div
          onClick={() => handleColorClick("[#E85382]")}
          className="w-12 h-12 rounded-full bg-primary-main cursor-pointer"
        ></div>
        <div
          onClick={() => handleColorClick("[#39BADF] ")}
          className="w-12 h-12 rounded-full bg-[#39BADF] cursor-pointer"
        ></div>
        <div
          onClick={() => handleColorClick("[#E1A725]")}
          className="w-12 h-12 rounded-full bg-[#E1A725] cursor-pointer"
        ></div>
      </div>
    </div>
  );
};

export default ThemeModal;
