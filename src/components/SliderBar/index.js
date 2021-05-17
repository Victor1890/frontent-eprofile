import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import logo from "../../assets/pokebola.svg";

const Sidebar = ({ show, changingPokemon, pokemon }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const re = new RegExp(search, "i");

  const filteredPokemon = pokemon
    ? pokemon.filter((pokemon) => {
        return re.test(pokemon.name);
      })
    : [];

  return (
    <div
      className={
        (show ? "flex" : "hidden") +
        " z-50 fixed pin-y pin-l bg-grey-lighter w-4/5 md:w-full md:max-w-xs flex-none border-r-2 border-grey-light md:flex flex-col"
      }
    >
      <div className='mb-4'>
        <div className='hidden md:flex md:justify-center'>
          <Link to='/' className='flex justify-center mt-4'>
            <img src={logo} alt='logo' width='150' height='150' />
          </Link>
        </div>
        <p className='text-center text-grey-dark uppercase text-sm font-bold py-6'>
          Pokedex Victor Rosario
        </p>
      </div>
      <div className='p-8 flex-1 overflow-y-scroll scrolling-touch md:scrolling-auto'>
        <nav className='text-base'>
          <form className='mb-4'>
            <div className='mb-4'>
              <label
                className='block text-grey-dark uppercase text-sm font-bold mb-2'
                htmlFor='search'
              >
                Buscar pokemon
              </label>
              <input
                className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline'
                type='search'
                placeholder='Buscar'
                value={search}
                onChange={handleChange}
              />
            </div>
          </form>
          <ul>
            {filteredPokemon ? (
              filteredPokemon.map((pokemonster) => (
                <li className='mb-3' key={pokemonster.id}>
                  <Link
                    to={`/pokemon/${pokemonster.id}`}
                    className='hover:cursor-pointer hover:text-red text-grey-darkest no-underline'
                    onClick={changingPokemon}
                  >
                    {pokemonster.name}
                  </Link>
                </li>
              ))
            ) : (
              <Spinner />
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
