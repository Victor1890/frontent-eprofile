import axios from "axios";

export const getPokemonById = async (id) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  return res.data;
};
