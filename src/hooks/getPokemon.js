import axios from "axios";
import { Capitalize } from "./utils";

export const getPokemon = async () => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=151",
    );

    return response.data.results.map((data) => {
      return {
        id: data.url
          .split("/")
          .filter((token) => token.length)
          .pop(),
        url: data.url,
        name: Capitalize(data.name),
      };
    });
  } catch (error) {
    return [];
  }
};
