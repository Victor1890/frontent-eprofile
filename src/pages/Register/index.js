import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UseSignUp } from "../../hooks/useAuth";

import Logo from "../../assets/pokebola.svg";
import Wall from "../../assets/wall2.png";

const Register = () => {
  const [form, setForm] = useState({
    nickName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const history = useHistory();

  const onGetValue = (name, data) => {
    const { value } = data.target;
    setForm({ ...form, [name]: value });
  };

  const clearInput = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = ""),
    );
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = form;

    if (password === confirmPassword) {
      UseSignUp(form).then(() => {
        clearInput();
        history.push("/signin");
      });
    }
  };

  return (
    <section className='bg-white font-family-karla h-screen'>
      <div className='w-full flex flex-wrap'>
        <div className='w-full md:w-1/2 flex flex-col'>
          <div className='flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12'>
            <div className=' text-white font-bold text-xl p-4' alt='Logo'>
              <img src={Logo} width='60' height='60' alt='Pokedex Logo' />
            </div>
          </div>

          <div className='flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32'>
            <p className='text-center text-3xl'>Únete a nosotros.</p>
            <form className='flex flex-col pt-3 md:pt-8' onSubmit={handlSubmit}>
              <div className='flex flex-col pt-4'>
                <label htmlFor='nickName' className='text-lg'>
                  Usuario
                </label>
                <input
                  type='text'
                  id='nickName'
                  placeholder='JohnSmith023'
                  onChange={(e) => onGetValue("nickName", e)}
                  required
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
              <div className='flex flex-col pt-4'>
                <label htmlFor='firstName' className='text-lg'>
                  Nombre
                </label>
                <input
                  type='text'
                  id='firstName'
                  placeholder='John'
                  onChange={(e) => onGetValue("firstName", e)}
                  required
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>
              <div className='flex flex-col pt-4'>
                <label htmlFor='lastName' className='text-lg'>
                  Apellido
                </label>
                <input
                  type='text'
                  id='lastName'
                  placeholder='Smith'
                  onChange={(e) => onGetValue("lastName", e)}
                  required
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>

              <div className='flex flex-col pt-4'>
                <label htmlFor='email' className='text-lg'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='your@email.com'
                  onChange={(e) => onGetValue("email", e)}
                  required
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>

              <div className='flex flex-col pt-4'>
                <label htmlFor='password' className='text-lg'>
                  Contraseña
                </label>
                <input
                  type='password'
                  id='password'
                  placeholder='Password'
                  onChange={(e) => onGetValue("password", e)}
                  required
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>

              <div className='flex flex-col pt-4'>
                <label htmlFor='confirm-password' className='text-lg'>
                  Confirmar Contraseña
                </label>
                <input
                  type='password'
                  id='confirm-password'
                  placeholder='Contraseña'
                  onChange={(e) => onGetValue("confirmPassword", e)}
                  required
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline'
                />
              </div>

              <button className='bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8'>
                Regístrate
              </button>
            </form>
            <div className='text-center pt-12 pb-12'>
              <p>
                ¿Ya tienes una cuenta? {""}
                <Link to='/signin' className='underline font-semibold'>
                  Entre aquí
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className='w-1/2 shadow-2xl'>
          <img
            className='object-cover w-full h-screen hidden md:block'
            src={Wall}
            alt='Background'
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
