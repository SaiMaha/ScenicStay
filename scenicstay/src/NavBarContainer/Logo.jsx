import React from 'react'
import logoimage from "../Assets/logo.png"

const Logo = () => {
  return (
    <div className='flex items-center  gap-4 p-[22px]'>
      <img src={logoimage} alt="logo" className='h-[52px] w-[60px] '/>
    </div>
  )
}

export default Logo