import React from "react";
import Navbar from "../Components/Navbar";
import { FaCheckCircle, FaStar, FaUsers, FaTools, FaShieldAlt } from "react-icons/fa";
import Footer from "../Components/Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      {/* Banner-1: Hero Section */}
      <div className="flex h-screen items-center text-white banner-1">
        <p className="landing-text font-semibold text-5xl ml-4">
          Cleaning Services starting @99rs
        </p>
      </div>

      {/* Banner-2: Home Services Section */}
      <div className="flex flex-col h-screen items-center justify-center text-white w-full bg-black relative banner-2">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?cleaning,home')" }}></div>

        <h2 className="text-4xl font-semibold mb-6 relative z-10">Our Home Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[
            { name: "Home Cleaning", img: "assets/Images/banner-1.jpg" },
            { name: "Plumbing", img: "assets/Images/plumbing.jpg" },
            { name: "Beauty & Salon", img: "assets/Images/salon.jpg" },
          ].map((service, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg text-center">
              <img src={service.img} alt={service.name} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{service.name}</h3>
            </div>
          ))}
        </div>

        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold rounded-md relative z-10">
          Explore More Services
        </button>
      </div>

      {/* Banner-3: Why Choose Us */}
      <div className="flex flex-col h-screen items-center justify-center text-white w-full bg-gray-900 p-10 relative banner-3">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?team,quality')" }}></div>

        <h2 className="text-4xl font-bold mb-3 relative z-10">Why Choose Us?</h2>
        <p className="text-lg text-gray-300 mb-8 text-center relative z-10">
          Trusted by thousands, we provide top-notch home services with expert professionals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[
            { text: "Certified Professionals", icon: <FaCheckCircle size={40} /> },
            { text: "100% Satisfaction Guarantee", icon: <FaShieldAlt size={40} /> },
            { text: "Affordable Pricing", icon: <FaTools size={40} /> },
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
              <div className="text-green-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.text}</h3>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 text-center relative z-10">
          {[
            { label: "5K+ Happy Customers", icon: <FaUsers size={50} className="text-blue-400" /> },
            { label: "100+ Services", icon: <FaTools size={50} className="text-yellow-400" /> },
            { label: "24/7 Support", icon: <FaShieldAlt size={50} className="text-red-400" /> },
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="mb-3">{stat.icon}</div>
              <h3 className="text-2xl font-bold">{stat.label}</h3>
            </div>
          ))}
        </div>

        <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold rounded-md relative z-10">
          Learn More
        </button>
      </div>

      {/* Banner-4: User Reviews */}
      <div className="flex flex-col h-screen items-center justify-center text-white w-full bg-black p-10 banner-4">
        <h2 className="text-4xl font-bold mb-6">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Rohit Sharma",
              review: "Excellent service! The cleaning team was professional and thorough.",
              rating: 5,
              img: "assets/Images/person-1.jpg",
            },
            {
              name: "Neha Verma",
              review: "Very satisfied with the salon service. Highly recommend!",
              rating: 4,
              img: "assets/Images/person-2.jpg",
            },
            {
              name: "Amit Patel",
              review: "Affordable and reliable plumbing services. Will use again.",
              rating: 4.5,
              img: "assets/Images/person-3.jpg",
            },
            {
              name: "Amit Patel",
              review: "Affordable and reliable plumbing services. Will use again.",
              rating: 4.5,
              img: "assets/Images/person-3.jpg",
            },
            {
              name: "Amit Patel",
              review: "Affordable and reliable plumbing services. Will use again.",
              rating: 4.5,
              img: "assets/Images/person-3.jpg",
            },
            {
              name: "Amit Patel",
              review: "Affordable and reliable plumbing services. Will use again.",
              rating: 4.5,
              img: "assets/Images/person-3.jpg",
            },
          ].map((user, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center shadow-lg">
              <img src={user.img} alt={user.name} className="w-16 h-16 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-gray-300 italic">"{user.review}"</p>
              <div className="flex justify-center mt-3 text-yellow-400">
                {Array.from({ length: Math.floor(user.rating) }, (_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
