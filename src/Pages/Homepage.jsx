import React from "react";
import Navbar from "../Components/Navbar";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center text-white banner-1">
        <p className="landing-text font-semibold text-5xl ml-4">
          Cleaning Services starting @99rs
        </p>
      </div>

      {/* Banner-2: Home Services Section */}
      <div className="flex flex-col h-screen items-center justify-center text-white w-full bg-black relative banner-2">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?cleaning,home')" }}></div>

        <h2 className="text-4xl font-semibold mb-6 relative z-10">Our Home Services</h2>
        
        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[
            { name: "Home Cleaning", img: "assets/Images/banner-1.jpg" },
            { name: "Plumbing", img: "assets/Images/banner-1.jpg" },
            { name: "Beauty & Salon", img: "assets/Images/banner-1.jpg" },
          ].map((service, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
              <img src={service.img} alt={service.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{service.name}</h3>
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold rounded-md relative z-10">
          Explore More Services
        </button>
      </div>
    </>
  );
}

