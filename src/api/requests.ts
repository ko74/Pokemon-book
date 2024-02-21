import axios, { AxiosResponse } from "axios";

const apiUrl = "https://pokeapi.co/api/v2";

export const api = axios.create({
  baseURL: `${apiUrl}`,
  timeout: 200000,
  withCredentials: false
});


// Get all pokemons
export const getAllPokemons = async (pageSize: number,): Promise<AxiosResponse<any>> => {
  try {
    const response = await api.get(`/pokemon?offset=0&limit=${pageSize}`);
    return response;
  } catch (error) {
    throw new Error(`Error fetching Pokémon data: ${error}`);
  }
};

// Get single pokemon
export const getPokemon = async (pokemonName: string): Promise<AxiosResponse<any>> => {
  try {
    const response = await api.get(`/pokemon/${pokemonName}`);
    return response?.data;
  } catch (error) {
    throw new Error(`Error fetching Pokémon data: ${error}`);
  }
};
