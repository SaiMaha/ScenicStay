import React from 'react'
import { NavLink } from 'react-router-dom'


const Menu = () => {
  return (
    <section>
        <article className=''>
            <div>
                <ul className='flex gap-12 pr-[35px] p-[22px] justify-around items-center'>
                    <li>
                      <NavLink to="/home">
                      Home
                      </NavLink>
                    </li> 
                    <li>
                      <NavLink to="/login">
                      Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/register">
                      Register
                      </NavLink>
                    </li>
                </ul>
            </div>
        </article>
    </section>
  )
}

export default Menu