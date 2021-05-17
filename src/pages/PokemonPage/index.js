import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import PokemonCard from "../../components/Card";
import { getPokemonById } from "../../hooks/getPokemonById";

const PokemonPage = ({ match }) => {
  const [pokemon, setPokemon] = useState({ id: 0, data: null });

  const { id } = match.params;

  useEffect(() => {
    getPokemonById(id).then((res) => {
      setPokemon({ id, data: res });
    });
  }, [id]);

  return (
    <div className='p-10 flex justify-center'>
      {pokemon.data ? <PokemonCard pokemon={pokemon.data} /> : <Spinner />}
    </div>
  );
};

export default PokemonPage;
