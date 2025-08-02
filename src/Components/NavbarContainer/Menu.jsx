import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/Contextapi';


const Menu = () => {
  let { AuthUser, logout } = useContext(AuthContext);

  let Anonymous = () => {
    return (
      <section>
        <article className='pr-6 gap-3'>
          <ul className='flex gap-7 items-center justify-around'>
            <li>
              <NavLink to="/login" className="hover:text-[#FFD700] transition duration-300">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register" className="hover:text-[#FFD700] transition duration-300">Sign Up</NavLink>
            </li>
          </ul>
        </article>
      </section>
    );
  };

  let Authenticated = () => {
    return (
      <section>
        <article className='pr-6 gap-3'>

          <ul className='flex gap-5 items-center justify-around'>
          <li>
          <NavLink to="/home" className="hover:text-[#FFD700] transition duration-300 pr-3">Home</NavLink>
        </li>
            <li>
          <NavLink to="/destinations" className="hover:text-[#FFD700] transition duration-300">Destinations</NavLink>
        </li>
        <li>
          <NavLink to="/scenic-stays" className="hover:text-[#FFD700] transition duration-300">Scenic Stays</NavLink>
        </li>
        <li>
          <NavLink to="/hidden-gems" className="hover:text-[#FFD700] transition duration-300">Hidden Gems</NavLink>
        </li>
        <li>
          <NavLink to="/traveljournal" className="hover:text-[#FFD700] transition duration-300">Travel Journal</NavLink>
        </li>
        <NavLink to="/home">
              <li>
                <img 
                  src="https://img.freepik.com/premium-vector/cute-kawaii-baby-panda-sitting-raising-hand-cartoon-character-vector-icon-illustration-children-illustration-animal-nature-concept-flat-cartoon-style_401949-695.jpg" 
                  className='h-[45px] w-[45px] rounded-3xl'
                  alt="User Avatar"
                />
                <p>{AuthUser.displayName}</p>
              </li>
            </NavLink>
            <NavLink>
              <li className='text-amber-200' onClick={logout}>
                Logout
              </li>
            </NavLink>
          </ul>
        </article>
      </section>
    );
  };

  return (
    <nav>
      <ul className='flex gap-10 pr-10 p-4 justify-around items-center text-lg font-medium text-[#E0E0E0]'>
        
        <li>
          <NavLink to="/about" className="hover:text-[#FFD700] transition duration-300">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:text-[#FFD700] transition duration-300">Contact</NavLink>
        </li>
        {AuthUser ? <Authenticated /> : <Anonymous />}
      </ul>
    </nav>
  );
};

export default Menu;
