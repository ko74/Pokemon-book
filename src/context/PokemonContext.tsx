import React, { createContext, useEffect, useState } from "react";
import { getAllPokemons } from "../api/requests";
import { DataProviderProps, IPokemonRequest, PokemonContextProps, ThemeContextProps } from "../types";

const PokemonContext = createContext<PokemonContextProps>({ pokemonRequest: null });

const ThemeContext = createContext<ThemeContextProps>({ 
  color: null,
  setThemeColor: () => {}, 
});

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [pokemonRequest, setPokemonRequest] = useState<IPokemonRequest | null>(null);
  const [themeColor, setThemeColor] = useState<string | null>(() => {
    return localStorage.getItem("themeColor") || null;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllPokemons(500);
        setPokemonRequest(response?.data);
        localStorage.setItem("pokemons", JSON.stringify(response?.data));
      } catch (error) {
        console.error(error);
      }
    };

    const localData = localStorage.getItem("pokemons");
    if (localData) {
      setPokemonRequest(JSON.parse(localData));
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    if (themeColor) {
      localStorage.setItem("themeColor", themeColor);
    }
  }, [themeColor]);

  return (
    <PokemonContext.Provider value={{ pokemonRequest }}>
      <ThemeContext.Provider value={{ color: themeColor, setThemeColor }}>
        {children}
      </ThemeContext.Provider>
    </PokemonContext.Provider>
  );
};

export { PokemonContext, ThemeContext, DataProvider };
