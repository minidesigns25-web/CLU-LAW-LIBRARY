
import React from 'react';
import { SearchIcon, VideoCameraIcon } from './icons';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative text-white py-32 md:py-48 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=1600&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-brand-purple opacity-80 bg-gradient-to-r from-brand-purple to-brand-gold/30"></div>
      <div className="relative container mx-auto px-4 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Your Gateway to <br />
          <span className="text-brand-gold">Legal Excellence</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Access comprehensive legal resources, cutting-edge research tools, and collaborative learning spaces at Chrisland University Law Library.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a href="#digital-resources" className="bg-brand-gold hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2">
            <SearchIcon className="w-5 h-5" />
            <span>Explore Resources</span>
          </a>
          <a href="#digital-resources" className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-purple-dark text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 ease-in-out flex items-center space-x-2">
            <VideoCameraIcon className="w-5 h-5" />
            <span>Virtual Tour</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
