import React from "react";
import { PokemonDetailsAboutProps } from "../types";

const PokemonAbout = ({
  height,
  weight,
  abilities,
}: PokemonDetailsAboutProps) => {
  return (
    <div className="w-full px-10">
      <div className="bg-white  border-y border-y-gray-200 text-center w-full ">
        <h1 className="text-xl font-bold w-full py-2">About</h1>
      </div>

      <div className="flex flex-col gap-3 items-center justify-center py-3">
        <div className="flex items-center gap-5">
          <span>Height</span>
          <span className="font-bold">{height}m</span>
        </div>

        <div className="flex items-center gap-5">
          <span>Weight</span>
          <span className="font-bold">{weight}kg</span>
        </div>

        <div className="flex  gap-5">
          <span>Abilities</span>
          <ul className="inline-block">
            {abilities.map((ability: any, index: number) => {
              return <li key={index} className="font-bold">{ability?.ability?.name},</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PokemonAbout;
