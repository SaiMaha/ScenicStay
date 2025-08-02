import React from 'react'
import logoimage from "../Assets/trip.png"
import { NavLink } from 'react-router-dom'

const Logo = () => {
  return (
    <NavLink to="/">
    <div className='flex items-center  gap-4 p-[22px]'>
      <img src={logoimage} alt="logo" className='h-[52px] w-[60px] '/>
    </div>
    </NavLink>
  )
}

export default Logo