import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { __AUTH } from '../Backend/Firebase';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from "react-hot-toast";

const Register = () => {
  let initialregisterdata = {
    username: "",
    email: "",
    createpassword: "",
    confirmpassword: ""
  };

  let [eye, setEye] = useState(false);
  let [confirmEye, setConfirmEye] = useState(false);
  let navigate = useNavigate();
  let [registerdata, setregisterdata] = useState(initialregisterdata);
  let { username, email, createpassword, confirmpassword } = registerdata;

  let handleEye = () => {
    setEye(!eye);
  };

  let handleConfirmEye = () => {
    setConfirmEye(!confirmEye);
  };

  let handlechange = (event) => {
    let { name, value } = event.target;
    setregisterdata({ ...registerdata, [name]: value });
  };

  let handlesubmit = async (event) => {
    event.preventDefault();

    try {
      if (createpassword === confirmpassword) {
        let userdetails = await createUserWithEmailAndPassword(__AUTH, email, createpassword);
        console.log(userdetails);
        await sendEmailVerification(userdetails.user);
        console.log("Email verified");
        toast.success(`You have successfully registered with ${email}`);
      
        navigate("/login");
      
      } else {
        toast.error(`Create password and Confirm password don't match`);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setregisterdata(initialregisterdata);
    }
  };

  return (
    <section 
      className="w-full h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1682519536388-ef21aab95031?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} 
    >
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <article className="relative mt-[50px] w-[400px] bg-white/20 backdrop-blur-lg shadow-2xl rounded-lg p-6 text-white border border-white/30 h-[580px] pt-3">
          <h2 className="text-3xl font-extrabold text-center py-3 border-b-2 border-white/50">Sign Up</h2>

          <form className="mt-4 flex flex-col gap-5" onSubmit={handlesubmit}>
            <section className="flex flex-col">
              <label htmlFor="username" className="text-lg font-semibold">Username</label>
              <input type="text" id="username" name="username" value={username} onChange={handlechange} 
                className="h-12 rounded-lg px-4 bg-white/30 text-white outline-none border border-white/50 placeholder-white/60 focus:ring-2 focus:ring-[#FFD700]"
                placeholder="Enter your username"
              />
            </section>

            <section className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold">Email</label>
              <input type="email" id="email" name="email" value={email} onChange={handlechange} 
                className="h-12 rounded-lg px-4 bg-white/30 text-white outline-none border border-white/50 placeholder-white/60 focus:ring-2 focus:ring-[#FFD700]"
                placeholder="Enter your email"
              />
            </section>

            <section className="flex flex-col">
              <label htmlFor="createpassword" className="text-lg font-semibold">Create Password</label>
              <div className='flex relative'>
                <input type={eye ? "text" : "password"} id="createpassword" name="createpassword" value={createpassword} onChange={handlechange}
                  className="h-12 rounded-lg px-4 bg-white/30 w-full text-white outline-none border border-white/50 placeholder-white/60 focus:ring-2 focus:ring-[#FFD700]"
                  placeholder="Create a password"
                />
                <div className='absolute right-3 top-4 cursor-pointer text-white' onClick={handleEye}>
                  {eye ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </section>

            <section className="flex flex-col">
              <label htmlFor="confirmpassword" className="text-lg font-semibold">Confirm Password</label>
              <div className='flex relative'>
                <input type={confirmEye ? "text" : "password"} id="confirmpassword" name="confirmpassword" value={confirmpassword} onChange={handlechange}
                  className="h-12 rounded-lg px-4 bg-white/30 w-full text-white outline-none border border-white/50 placeholder-white/60 focus:ring-2 focus:ring-[#FFD700]"
                  placeholder="Confirm your password"
                />
                <div className='absolute right-3 top-4 cursor-pointer text-white' onClick={handleConfirmEye}>
                  {confirmEye ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </section>

            <button className="h-12 bg-[#FFD700] text-black font-bold text-xl rounded-lg shadow-md hover:scale-105 transition duration-300">
              BEGIN JOURNEY
            </button>
          </form>

          
          <p className="text-center mt-4 text-white/80 text-lg">
            Already have an account?  
            <a href="/login" className="text-[#FFD700] font-bold hover:underline ml-1">
              Login
            </a>
          </p>
          
        </article>
      </div>
    </section>
  );
};

export default Register;
