import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../../components/SliderBar";
import logo from "../../logo.png";

import HomePage from "../../components/HomePage";
import PokemonPage from "../PokemonPage";
import { getPokemon } from "../../hooks/getPokemon";

const token = sessionStorage.getItem("token");

const Home = () => {
  const [pokemon, setPokemon] = useState(null);
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((preveState) => ({
      sidebar: !preveState.sidebar,
    }));
  };

  useEffect(() => {
    getPokemon().then((data) => {
      setPokemon(data);
    });
  }, []);

  token ?? (window.location.href = "/signin");

  return (
    <Router>
      <div>
        <Sidebar
          pokemon={pokemon}
          show={sidebar}
          changingPokemon={toggleSidebar}
        />

        <div className='md:ml-80'>
          <div className='fixed w-full z-20'>
            <div className='pin-t bg-white md:hidden relative border-b border-grey-light h-12 flex items-center'>
              <div
                className='absolute pin-l pin-y px-4 flex items-center'
                onClick={toggleSidebar}
              >
                <svg
                  className='fill-current w-4 h-4 cursor-pointer text-grey'
                  role='button'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                </svg>
              </div>
              <a href='/' className='mx-auto inline-flex items-center'>
                <img src={logo} alt='logo' width='50' />
              </a>
              <div className={sidebar ? "" : "hidden"} onClick={toggleSidebar}>
                <div className='flex items-center absolute pin-r pin-y px-4'>
                  <svg
                    className='fill-current w-4 h-4 cursor-pointer text-grey'
                    role='button'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                  >
                    <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='px-6 pt-8 w-full max-w-lg mx-auto'>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/pokemon/:id' component={PokemonPage} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Home;
