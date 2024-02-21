import React, { useContext } from "react";
import { PokemonStatsProps } from "../types";
import { ThemeContext } from "../context/PokemonContext";

const PokemonStat = ({ data }: PokemonStatsProps) => {
  const { color } = useContext(ThemeContext);
  return (
    <div>
      {data?.map((stat: any, index: number) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-3 items-end justify-center"
          >
            <div className="flex items-center gap-5">
              <span>{stat?.stat?.name}</span>
              <Stat
                color={color ?? "#e85382"}
                statBase={stat.base_stat}
                effort={stat.effort}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Stat = ({
  color,
  statBase,
  effort,
}: {
  color: string;
  statBase: number;
  effort: number;
}) => {
  const percentage = (statBase + effort) / 2;
  const formattedColor = color?.replace(/\[|\]/g, "");

  return (
    <span
      className="font-bold rounded-full "
      style={{
        backgroundColor: "#E1E1E1",
        width: "130px",
        height: "10px",
        display: "inline-block",
        position: "relative",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: `${percentage}%`,
          backgroundColor: formattedColor,
          borderRadius: "inherit",
        }}
      ></span>
    </span>
  );
};

export default PokemonStat;
