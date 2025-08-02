import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { __AUTH } from '../Backend/Firebase';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  let [email, setEmail] = useState("");
  let navigate = useNavigate();

  let handleChange = (e) => {
    setEmail(e.target.value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(__AUTH, email);
      toast.success(`Email link for reset is sent to ${email}`);
      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <section 
      className="w-full h-screen flex items-center justify-center bg-cover bg-center relative" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1615578910938-3f46e36aec82?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <article className="relative w-[400px] bg-white/20 backdrop-blur-lg shadow-2xl rounded-lg p-6 text-white border border-white/30">
          <h2 className="text-3xl font-extrabold text-center py-3 border-b-2 border-white/50">Reset Password</h2>
          <form className="mt-4 flex flex-col gap-5" onSubmit={handleSubmit}>
            <section className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email} 
                onChange={handleChange} 
                className="h-12 rounded-lg px-4 bg-white/30 text-white outline-none border border-white/50 placeholder-white/60 focus:ring-2 focus:ring-[#FFD700]" 
                placeholder="Enter your email" 
              />
            </section>
            <div className="h-[50px] w-full flex items-center justify-center">
              <button className="h-[48px] w-[180px] bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xl font-bold rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition duration-300">
                Send Reset Link
              </button>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
};

export default ForgotPassword;