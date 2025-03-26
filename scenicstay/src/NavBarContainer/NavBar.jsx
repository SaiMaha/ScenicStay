import React from 'react'
import Logo from './Logo';
import Menu from './Menu';

const NavBar = () => {
  return (
    <section className='h-[70px] bg-black'>
        <article className='h-[70px] bg-black'>
            <div className='h-[70px] bg-[#1A1A1A] text-[#F5E1A4] text-2xl flex justify-between items-center'>
                <Logo/>
                <Menu/>
            </div>
        </article>
    </section>
  )
}

export default NavBar