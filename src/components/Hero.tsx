import React from 'react';
import { Leaf, Recycle, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 pt-20">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-4 mb-8 animate-bounce">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
            <Recycle className="w-6 h-6 text-white" />
          </div>
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Protecting Nature,<br />
          <span className="text-green-600">One Bag at a Time</span>
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join us in our mission to save the environment with 100% biodegradable bags. 
          Together, we can create a cleaner, greener future for generations to come.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">100%</div>
            <div className="text-gray-700">Biodegradable</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">2022</div>
            <div className="text-gray-700">Established</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">4</div>
            <div className="text-gray-700">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;