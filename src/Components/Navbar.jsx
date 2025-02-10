import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div 
        className="fixed inset-0 bg-cover bg-center z-[-2] w-full h-full"
        style={{ backgroundImage: "url('Images/banner-2.jpg')", backgroundAttachment: "fixed"}}
      ></div>
      
      <div className="fixed inset-0 bg-gradient-to-r from-black/60 to-transparent z-[-1] w-full h-full"></div>
      
      <nav 
        className={`bg-opacity-90 bg-cover bg-center text-white fixed w-full top-0 z-50 transition-shadow duration-300 ${hasShadow ? 'shadow-lg' : ''}`} 
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x400/?abstract')", backgroundAttachment: "fixed" }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-start gap-20 items-center">
          <a href="#" className="text-3xl font-bold">Jeldhi</a>
          
          <div className="hidden md:flex space-x-20 text-lg">
            <a href="#" className="hover:text-gray-200 transition">Home</a>
            <a href="#" className="hover:text-gray-200 transition">About</a>
            <a href="#" className="hover:text-gray-200 transition">Services</a>
            <a href="#" className="hover:text-gray-200 transition">Contact</a>
          </div>
          
          <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-opacity-90 bg-cover bg-center shadow-lg absolute w-full left-0 top-16"
            style={{ backgroundImage: "url('https://source.unsplash.com/1600x400/?abstract')" }}
          >
            <div className="flex flex-col space-y-4 p-6 text-lg">
              <a href="#" className="hover:text-gray-200 transition">Home</a>
              <a href="#" className="hover:text-gray-200 transition">About</a>
              <a href="#" className="hover:text-gray-200 transition">Services</a>
              <a href="#" className="hover:text-gray-200 transition">Contact</a>
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
}
