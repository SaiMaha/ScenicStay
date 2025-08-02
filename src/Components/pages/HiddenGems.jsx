import React from "react";

const HiddenGems = () => {
  const gems = [
    { title: "Faroe Islands, Denmark", description: "Dramatic cliffs, waterfalls, and untouched landscapes in a remote Nordic paradise.", image: "https://plus.unsplash.com/premium_photo-1668883189361-9c754861dbd6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Jiufen, Taiwan", description: "A charming old town with glowing lanterns and breathtaking mountain views.", image: "https://images.unsplash.com/photo-1540187334920-54e87c2771c0?q=80&w=1416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Chefchaouen, Morocco", description: "A mesmerizing blue city nestled in the Rif Mountains, full of culture and history.", image: "https://images.unsplash.com/photo-1577147779774-a8786a672c54?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Hallstatt, Austria", description: "A fairy-tale lakeside village surrounded by the stunning Austrian Alps.", image: "https://images.unsplash.com/photo-1663155767899-10be0af195a2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Isle of Skye, Scotland", description: "Mystical landscapes, rugged coastlines, and enchanting folklore.", image: "https://images.unsplash.com/photo-1687876790754-2a92a8f0686d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Lofoten Islands, Norway", description: "A scenic escape with dramatic peaks and serene fishing villages.", image: "https://images.unsplash.com/photo-1653894315863-fc9c7cca9eda?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Svaneti, Georgia", description: "Ancient watchtowers and breathtaking mountain valleys in a hidden Caucasus gem.", image: "https://images.unsplash.com/photo-1691918781533-53853885e528?q=80&w=1425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Colmar, France", description: "A picturesque town straight out of a storybook with colorful timbered houses.", image: "https://images.unsplash.com/photo-1584109504427-f9b960c94cdb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Yakushima, Japan", description: "A mystical island covered in ancient mossy forests and wildlife.", image: "https://images.unsplash.com/photo-1612476802017-36f1864e02d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    
  ];

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618822461310-da1be362e30c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">Hidden Gems Around the World</h1>
          <p className="text-xl sm:text-2xl font-light">Discover breathtaking, lesser-known travel destinations!</p>
          <button className="px-8 py-3 bg-yellow-500 text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-900 hover:text-yellow-500 transition duration-300">
            Explore Hidden Gems
          </button>
        </div>
      </section>

      
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gems.map((gem, index) => (
            <div key={index} className="relative group">
              <div
                className="w-full h-64 bg-cover rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300 ease-in-out"
                style={{ backgroundImage: `url(${gem.image})` }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{gem.title}</h3>
                <p className="text-sm font-semibold text-gray-300">{gem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HiddenGems;