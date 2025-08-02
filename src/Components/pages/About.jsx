import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100 ">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-wide">About Us</h1>
          <p className="text-xl sm:text-4xl font-light">
            Discover Hidden Gems Around the World 🌍
          </p>
        </div>
      </section>

      {/* About Content */}
      <div className="mt-10 text-gray-700 text-lg max-w-3xl mx-auto">
        <p className="text-center text-xl font-semibold">
          "Unveiling the World’s Best-Kept Travel Secrets"
        </p>
        <p className="mt-4 text-center">
          At <strong>Scenic Stay</strong>, we bring you the most unique and off-the-beaten-path travel destinations. Whether you're an adventurer seeking unexplored landscapes or a traveler looking for local gems, we help you uncover places beyond the usual tourist spots.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="mt-10 max-w-4xl mx-auto grid md:grid-cols-3 gap-6 pb-10">
        <div className="p-6 bg-white rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-teal-600">✨ Find Unique Destinations</h3>
          <p className="text-gray-600 mt-2">Explore hidden treasures, cultural wonders, and breathtaking locations.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-teal-600">📍 Plan Your Next Adventure</h3>
          <p className="text-gray-600 mt-2">Get insights, travel tips, and must-see spots curated just for you.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-teal-600">🌎 Inspire & Explore</h3>
          <p className="text-gray-600 mt-2">Let our recommendations spark your next unforgettable journey!</p>
        </div>
      </div>
    </div>
  );
};

export default About;