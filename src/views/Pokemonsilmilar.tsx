import React from "react";
import { PokemonDetailsSimilarProps } from "../types";
import Card from "../components/Card";

const Pokemonsilmilar = ({ data }: PokemonDetailsSimilarProps) => {
  data = [
    {
      name: "First",
      img: "/img/PokemonLogo.png",
    },
    {
      name: "First",
      img: "/img/PokemonLogo.png",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto bg-white">
      <div className="bg-white  border-y border-y-gray-200 text-center w-full ">
        <h1 className="text-xl font-bold w-full py-2">Similar</h1>
      </div>
{/* 
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 bg-secondary-main">
        {data.map((pokemon: any, index: number) => (
          <div className="relative" key={index}>
            <Card name={pokemon?.name} img={pokemon?.img} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Pokemonsilmilar;
