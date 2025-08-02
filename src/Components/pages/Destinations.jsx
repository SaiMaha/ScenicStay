import React from "react";

const Destinations = () => {
  const destinations = [
    { title: "Paris", description: "The city of lights, a hub for art, fashion, and culture.", image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8fDA%3D" },
    { title: "New York", description: "A bustling metropolis with iconic landmarks and vibrant culture.", image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D" },
    { title: "Tokyo", description: "A perfect blend of traditional and modern, with stunning technology and history.", image: "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8fDA%3D" },
    { title: "Barcelona", description: "Famous for its unique architecture, beaches, and rich history.", image: "https://images.unsplash.com/photo-1578912996078-305d92249aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJhcmNlbG9uYXxlbnwwfHwwfHx8MA%3D%3D" },
    { title: "Rome", description: "A city steeped in history with ancient monuments and world-class art.", image: "https://plus.unsplash.com/premium_photo-1661938399624-3495425e5027?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Sydney", description: "Known for its stunning harbor, beaches, and iconic Opera House.", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Cape Town", description: "A beautiful mix of mountains, beaches, and vibrant culture.", image: "https://images.unsplash.com/photo-1585061528750-3baca2cb6a10?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Kyoto", description: "A peaceful city with traditional temples, gardens, and beautiful landscapes.", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Dubai", description: "A luxurious city known for its skyscrapers, shopping, and modern architecture.", image: "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "India", description: "A vibrant land of culture, history, and diversity", image: "https://plus.unsplash.com/premium_photo-1697729444936-8c6a6f643312?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Rio de Janeiro", description: "A lively city known for its beaches, samba, and iconic Christ the Redeemer statue.", image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "South Korea", description: "A dynamic blend of tradition, technology, and K-culture", image: "https://plus.unsplash.com/premium_photo-1661885684862-e94f628a3717?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

 


  return (
    <div className="bg-gradient-to-r from-blue-100 via-green-100 to-yellow-100">
     
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661962660197-6c2430fb49a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">Explore Breathtaking Destinations</h1>
          <p className="text-xl sm:text-2xl font-light">Discover hidden gems and must-visit spots that you should explore before you die!</p>
          <button className="px-8 py-3 bg-yellow-500 text-gray-900 text-lg font-semibold rounded-lg hover:bg-gray-900 hover:text-yellow-500 transition duration-300">
            Start Exploring
          </button>
        </div>
      </section>

      
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="relative group">
              <div
                className="w-full h-64 bg-cover rounded-xl shadow-lg transform group-hover:scale-105 transition duration-300 ease-in-out"
                style={{ backgroundImage: `url(${destination.image})` }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold">{destination.title}</h3>
                <p className="text-sm font-semibold text-gray-300">{destination.description}</p>
                
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Destinations;
