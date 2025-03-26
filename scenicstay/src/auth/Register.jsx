import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react'
import { __AUTH } from '../Backend/Firebase';

const Register = () => {
  let initialregisterdata={
    username:"",
    email:"",
    createpassword:"",
    confirmpassword:""
  }
  let [registerdata, setregisterdata]=useState(initialregisterdata);
  let {username, email, createpassword, confirmpassword}=registerdata;
  let handlechange=(event)=>{
    let {name,value}=event.target
    setregisterdata({...registerdata,[name]:value})
  }

  let handlesubmit=async (event)=>{
    event.preventDefault();
    setregisterdata(initialregisterdata)

   

  

  try {
    let userdetails=await createUserWithEmailAndPassword(__AUTH, email ,createpassword)
    console.log(userdetails)

    await sendEmailVerification(userdetails.user)
    console.log("email verified")
    
  } catch (error) {
    console.log(error.code)
  }
}

  return (
    <section className='w-full bg-amber-100 h-[90vh] flex items-center justify-evenly'>
        <article className='h-[600px] w-[400px] bg-black text-3xl text-amber-200 rounded-md'>
        <h2 className='text-3xl font-extrabold text-center py-2.5 border-b-4 border-amber-200'>Register Form</h2>
            <form action="" className=' h-[500px] flex items-center justify-evenly flex-col'onSubmit={handlesubmit}>
                <section className='w-full flex  justify-around flex-col px-4'>
                    <label htmlFor="username" className='text-2xl font-bold'>UserName</label>
                    <input type="text" id='username' name='username'  value={username} onChange={handlechange} className='h-[45px] border-4 border-amber-200'/>
                </section>
                <section className='w-full flex px-4 justify-around flex-col'>
                    <label htmlFor="email" className='text-2xl font-bold'>Email</label>
                    <input type="email" id='email' name='email' value={email} onChange={handlechange} className='h-[45px] border-4 border-amber-200'/>
                </section>
                <section className='w-full flex px-4 justify-around flex-col'>
                    <label htmlFor="createpassword" className='text-2xl font-bold'>Create Password</label>
                    <input type="password" id='createpassword' value={createpassword} onChange={handlechange} name='createpassword' className='h-[45px] border-4 border-amber-200'/>
                </section>
                <section className='w-full flex px-4 justify-around flex-col'>
                    <label htmlFor="confirmpassword" className='text-2xl font-bold'>Confirm Password</label>
                    <input type="password" id='confirmpassword' value={confirmpassword} onChange={handlechange} name='confirmpassword' className='h-[45px] border-4 border-amber-200'/>
                </section>
                <section className='w-full flex items-center justify-around flex-col'>
                  <button className='h-[50px] w-[150px] bg-amber-300 text-2xl text-black text-center font-extrabold rounded-md px-5'>REGISTER</button>
                </section>
            </form>
        </article>
    </section>
  )
}

export default Register