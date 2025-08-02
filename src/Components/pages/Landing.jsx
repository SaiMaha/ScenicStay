import React from 'react';
import { NavLink } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center relative text-white text-center">
      
      {/* Background Video */}
      <video
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
        autoPlay
        loop
        muted
      >
        <source src="/Scenicstay.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground Content */}
      <article className="relative z-10">
        <div>
          <h1 className="text-7xl font-bold">Discover Your Next Adventure</h1>
          <p className="mt-4 text-4xl">Explore breathtaking destinations for free</p>
           <NavLink to="/register">
            <button className="mt-6 px-7 py-4 bg-white text-blue-900 font-semibold rounded-full shadow-md hover:bg-blue-700 hover:text-white transition">
              Get Started
            </button>
            </NavLink>
        </div>
      </article>
      
    </section>
  );
};

export default Landing;
