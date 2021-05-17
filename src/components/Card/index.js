import PokemonType from "./PokemonType";
import { Capitalize } from "../../hooks/utils";

const PokemonCard = ({ pokemon }) => (
  <div className='max-w-sm overflow-hidden shadow-lg'>
    <img
      className='w-full'
      src={"https://img.pokemondb.net/artwork/" + pokemon.name + ".jpg"}
      alt={pokemon.name}
    />
    <div className='px-6 py-4 border-t-2'>
      <div className='font-bold text-xl mb-2'>
        {Capitalize(pokemon.name)} #{pokemon.id}
      </div>
      <p className='text-grey-darker text-base'>
        <b>{Capitalize(pokemon.name)}</b> es un pokemon que pesa
        <b>{pokemon.weight}</b> libras. Su experiencia base es
        <b> {pokemon.base_experience}</b> puntos.
      </p>
    </div>
    <div className='px-6 py-4'>
      {pokemon.types.map((type) => (
        <PokemonType key={type.slot} type={type.type} />
      ))}
    </div>
  </div>
);

export default PokemonCard;
