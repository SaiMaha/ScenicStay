import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { __AUTH } from '../Backend/Firebase';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Login = () => {
  let [LoginData, setLoginData] = useState({ email: "", password: "" });
  let [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  let [eye, setEye] = useState(false);

  let handleChange = (event) => {
    let { name, value } = event.target;
    setLoginData({ ...LoginData, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let userData = await signInWithEmailAndPassword(__AUTH, LoginData.email, LoginData.password);
      if (userData.user.emailVerified) {
        navigate("/home");
        toast.success(`${LoginData.email} has successfully logged in`);
      } else {
        toast.error(`${LoginData.email} has not verified`);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoginData({ email: "", password: "" });
      setLoading(false);
    }
  };

  return (
    <section className="w-full h-screen flex items-center justify-center bg-cover bg-center relative" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1470&auto=format')" }}>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <article className="relative w-[400px] bg-white/20 backdrop-blur-lg shadow-2xl rounded-lg p-6 text-white border border-white/30">
          <h2 className="text-3xl font-extrabold text-center py-3 border-b-2 border-white/50">Log In</h2>
          <form className="mt-4 flex flex-col gap-5" onSubmit={handleSubmit}>
            <section className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold">Email</label>
              <input type="email" id="email" name="email" value={LoginData.email} onChange={handleChange} 
                className="h-12 rounded-lg px-4 bg-white/30 text-white outline-none border border-white/50 placeholder-white/60 focus:ring-2 focus:ring-[#FFD700]"
                placeholder="Enter your email" />
            </section>
            <section className="flex flex-col">
              <label htmlFor="password" className="text-lg font-semibold">Password</label>
              <div className="flex relative">
                <input type={eye ? "text" : "password"} id="password" name="password" value={LoginData.password} onChange={handleChange}
                  className="h-12 rounded-lg px-4 bg-white/30 w-full text-white outline-none border border-white/50 placeholder-white/60 focus:ring-2 focus:ring-[#FFD700]"
                  placeholder="Enter your password" />
                <div className="absolute right-3 top-4 cursor-pointer text-white" onClick={() => setEye(!eye)}>
                  {eye ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
            </section>
            <button className="h-[48px] w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xl font-bold rounded-full shadow-lg hover:scale-105 transition duration-300">
              {loading ? "⏳" : "🔓 DIVE IN"}
            </button>
            <div className="text-center mt-4">
              <p className="text-white/80">Don't have an account? <span className="text-yellow-400 cursor-pointer" onClick={() => navigate('/register')}>Register</span></p>
              <p className="text-white/80 mt-2">Forgot Password? <span className="text-yellow-400 cursor-pointer" onClick={() => navigate('/forgot-password')}>Reset here</span></p>
            </div>
          </form>
        </article>
      </div>
    </section>
  );
};

export default Login;