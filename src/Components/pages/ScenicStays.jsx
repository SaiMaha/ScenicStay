import React from "react";

const ScenicStay = () => {
  const stays = [
    { title: "The Himalayas, India", description: "A serene escape into the mountains with breathtaking views and tranquility.", image: "https://images.unsplash.com/photo-1607836046730-3317bd58a31b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Bora Bora, French Polynesia", description: "Luxurious overwater bungalows and crystal-clear lagoons surrounded by tropical beauty.", image: "https://images.unsplash.com/photo-1532408840957-031d8034aeef?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Swiss Alps, Switzerland", description: "Stay amidst snow-capped peaks, lakes, and valleys for an unforgettable alpine experience.", image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Santorini, Greece", description: "White-washed villas, blue-domed churches, and stunning sunsets over the Aegean Sea.", image: "https://images.unsplash.com/photo-1615015456178-ae6bb600b7ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U2FudG9yaW5pJTJDJTIwR3JlZWNlfGVufDB8fDB8fHww" },
    { title: "Kyoto, Japan", description: "Traditional ryokans and peaceful gardens in a city full of history and nature.", image: "https://images.unsplash.com/photo-1610265082060-7234c9de51ab?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Banff, Canada", description: "A picturesque town surrounded by pristine lakes, forests, and towering mountain peaks.", image: "https://images.unsplash.com/photo-1649955092030-fb171eda019a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Maui, Hawaii", description: "Tropical landscapes, sandy beaches, and lush rainforests for a perfect getaway.", image: "https://images.unsplash.com/photo-1558022020-5bc75c1b7858?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Lake Como, Italy", description: "Stay by the peaceful lakeside with views of charming villas and the Italian Alps.", image: "https://images.unsplash.com/photo-1586974726316-c6302de6a160?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Reykjavik, Iceland", description: "Surreal landscapes with volcanoes, glaciers, and hot springs in the heart of nature.", image: "https://images.unsplash.com/photo-1606130503037-6a8ef67c9d2d?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Queenstown, New Zealand", description: "Adventure meets tranquility with stunning lakes and mountains surrounding this resort town.", image: "https://images.unsplash.com/photo-1642834857746-5d7bd424502a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Amalfi Coast, Italy", description: "Cliffside views, crystal-clear waters, and charming coastal villages make for a dreamy stay.", image: "https://images.unsplash.com/photo-1533656338503-b22f63e96cd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW1hbGZpJTIwQ29hc3QlMkMlMjBJdGFseXxlbnwwfHwwfHx8MA%3D%3D" },
    { title: "Costa Rica Rainforests", description: "Stay amidst the rich biodiversity and untamed beauty of tropical rainforests.", image: "https://plus.unsplash.com/premium_photo-1661962984775-f8086e609650?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <div className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
     
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1470&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">Scenic Stays Around the World</h1>
          <p className="text-xl sm:text-2xl font-light">Escape to these breathtaking spots for the ultimate nature-filled getaway!</p>
          <button className="px-8 py-3 bg-yellow-500 text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-900 hover:text-yellow-500 transition duration-300">
            Explore Scenic Stays
          </button>
        </div>
      </section>

      
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stays.map((stay, index) => (
            <div key={index} className="relative group">
              <div
                className="w-full h-64 bg-cover rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300 ease-in-out"
                style={{ backgroundImage: `url('${stay.image}')` }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{stay.title}</h3>
                <p className="text-sm font-semibold text-gray-300">{stay.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ScenicStay;