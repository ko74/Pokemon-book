import { useState, useEffect } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { CardType } from "../components/Card";
import Tabs from "../components/Tabs";
import PokemonStat from "./PokemonStat";
import PokemonAbout from "./PokemonAbout";
import Pokemonsilmilar from "./Pokemonsilmilar";
import { BackButtonProps, PokemonDetailsProps } from "../types";
import { getDominantColor } from "../functions";

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ data, onBack }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [dominantColor, setDominantColor] = useState<string>("");

  useEffect(() => {
    getDominantColor(
      data?.sprites.other.dream_world.front_default ?? "",
      (color) => {
        setDominantColor(color);
      }
    );
  }, [data]);

  const tabs: string[] = ["About", "Stats", "Similar"];

  return (
    <div className="h-full w-full bg-white grid grid-cols-1 items-center justify-between rounded-r-lg md:w-[28vw] relative">
      <div
        style={{
          backgroundColor: dominantColor ? dominantColor : "#E85382",
          padding: "0.75rem",
          borderRadius: "0.5rem",
          height: "18rem",
        }}
      >
        <div className="flex items-center justify-start">
          <BackButton onClick={onBack} />
        </div>

        <div className="flex items-center justify-center px-5 min-w-full">
          <img
            src={
              data?.sprites.other.dream_world.front_default ??
              "/img/PokemonLogo.png"
            }
            alt="pokemon"
            className="w-screen md:w-2/3 translate-y-1 md:translate-y-11"
            style={{ height: "50%" }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center py-10 mt-10">
        <h2 className="font-bold py-2">{data?.name}</h2>

        <div className="flex items-center gap-5">
          {data?.types.map((type: any, index: number) => {
            return (
              <CardType
                text={type?.type?.name}
                icon={type?.type?.url}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <div className="py-2 flex flex-col items-center justify-center">
        {activeTab === 0 && (
          <PokemonAbout
            height={data?.height}
            weight={data?.weight}
            abilities={data?.abilities}
          />
        )}
        {activeTab === 1 && <PokemonStat data={data?.stats} />}
        {activeTab === 2 && <Pokemonsilmilar data={[]} />}
      </div>

      <div className="w-full px-5 pt-10">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export const BackButton = ({ onClick }: BackButtonProps) => (
  <div
    onClick={onClick}
    className="h-10 w-10 bg-white p-2 flex items-center justify-center rounded cursor-pointer"
  >
    <ArrowLeftIcon className="h-4 w-4 font-bold" />
  </div>
);

export default PokemonDetails;
