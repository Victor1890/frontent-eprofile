import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UseSignIn } from "../../hooks/useAuth";

import Logo from "../../assets/pokebola.svg";
import Wall from "../../assets/wall1.jpg";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const history = useHistory();

  const onChangeValue = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const clearInput = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = ""),
    );
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    UseSignIn(form).then((res) => {
      const id = res.userFound._id;

      sessionStorage.setItem("token", res.token);

      clearInput();

      history.push(`/profile/${id}`);
    });
  };

  return (
    <section className='bg-white font-family-karla h-screen'>
      <div className='w-full flex flex-wrap'>
        <div className='w-full md:w-1/2 flex flex-col'>
          <div className='flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24'>
            <div className=' text-white font-bold text-xl p-4'>
              <img src={Logo} width='60' height='60' alt='Pokedex Logo' />
            </div>
          </div>

          <div className='flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32'>
            <p className='text-center text-3xl'>Bienvenido.</p>
            <form className='flex flex-col pt-3 md:pt-8' onSubmit={handlSubmit}>
              <div className='flex flex-col pt-4'>
                <label htmlFor='email' className='text-lg'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='your@email.com'
                  onChange={(e) => onChangeValue("email", e.target.value)}
                  required
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>

              <div className='flex flex-col pt-4'>
                <label htmlFor='password' className='text-lg'>
                  Contrase??a
                </label>
                <input
                  type='password'
                  id='password'
                  placeholder='Password'
                  onChange={(e) => onChangeValue("password", e.target.value)}
                  required
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>

              <button className='bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8'>
                Iniciar sesi??n
              </button>
            </form>
            <div className='text-center pt-12 pb-12'>
              <p>
                ??No tienes una cuenta? {""}
                <Link to='/signup' className='underline font-semibold'>
                  Registrate aqu??.
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className='w-1/2 shadow-2xl'>
          <img
            className='object-cover w-full h-screen hidden md:block'
            src={Wall}
            alt='Wallpaper Pokemon Victor Rosario'
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
