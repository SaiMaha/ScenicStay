import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100">

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661955632358-85564b2810b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">Explore the World, One Adventure at a Time</h1>
          <p className="text-xl sm:text-2xl font-light">Find your next vacation destination and make unforgettable memories.</p>
        </div>
      </section>

      {/* Card Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Destinations Card */}
          <div className="relative group">
            <div className="w-full h-64 bg-cover rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300 ease-in-out"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1656288227310-26d006116aa2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Top Destinations</h3>
              <NavLink to="/destinations" className="text-lg font-semibold text-blue-500 hover:underline">Explore Now</NavLink>
            </div>
          </div>

          {/* Scenic Stays Card */}
          <div className="relative group">
            <div className="w-full h-64 bg-cover rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300 ease-in-out"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1649452814282-f43a71cb7cc0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Scenic Stays</h3>
              <NavLink to="/scenic-stays" className="text-lg font-semibold text-blue-500 hover:underline">Explore Now</NavLink>
            </div>
          </div>

          {/* Hidden Gems Card */}
          <div className="relative group">
            <div className="w-full h-64 bg-cover rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300 ease-in-out"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1614983652406-41044db11dc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwZmllbGR8ZW58MHx8MHx8fDA%3D')" }}>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Hidden Gems</h3>
              <NavLink to="/hidden-gems" className="text-lg font-semibold text-blue-500 hover:underline">Explore Now</NavLink>
            </div>
          </div>

          {/* Wishlist Card */}
          <div className="relative group">
            <div className="w-full h-64 bg-cover rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300 ease-in-out"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Travel Journal</h3>
              <NavLink to="/traveljournal" className="text-lg font-semibold text-blue-500 hover:underline">Start Now</NavLink>
            </div>
          </div>

          {/* About Card */}
          <div className="relative group">
            <div className="w-full h-64 bg-cover rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300 ease-in-out"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1484766280341-87861644c80d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN1bnJpc2V8ZW58MHx8MHx8fDA%3D')" }}>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold">About Us</h3>
              <NavLink to="/about" className="text-lg font-semibold text-blue-500 hover:underline">Learn More</NavLink>
            </div>
          </div>

          {/* Contact Card */}
          <div className="relative group">
            <div className="w-full h-64 bg-cover rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300 ease-in-out"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494233892892-84542a694e72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29hc3RhbCUyMHJvYWR8ZW58MHx8MHx8fDA%3D')" }}>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Contact</h3>
              <NavLink to="/contact" className="text-lg font-semibold text-blue-500 hover:underline">Get in Touch</NavLink>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
