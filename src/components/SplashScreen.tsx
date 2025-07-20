import React from 'react';
import { Leaf, Heart } from 'lucide-react';

const SplashScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-emerald-50 to-teal-100 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 animate-bounce delay-1000">
        <Leaf className="text-green-300 w-8 h-8 transform rotate-12" />
      </div>
      <div className="absolute top-32 right-16 animate-bounce delay-2000">
        <Heart className="text-green-400 w-6 h-6" />
      </div>
      <div className="absolute bottom-40 left-20 animate-bounce delay-500">
        <Leaf className="text-emerald-300 w-10 h-10 transform -rotate-45" />
      </div>
      <div className="absolute bottom-60 right-12 animate-bounce delay-1500">
        <Leaf className="text-teal-300 w-7 h-7 transform rotate-90" />
      </div>

      {/* Main content */}
      <div className="text-center z-10">
        {/* Logo */}
        <div className="mb-8 animate-pulse">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-lg mb-4">
            <Leaf className="text-white w-12 h-12" />
          </div>
          <h1 className="text-6xl font-bold text-green-600 mb-2" style={{ fontFamily: 'Pacifico, cursive' }}>
            APGreen
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xl text-green-700 font-medium leading-relaxed" style={{ fontFamily: 'Quicksand, sans-serif' }}>
          Eat Smart. Waste Less. Go Green.
        </p>

        {/* Loading indicator */}
        <div className="mt-12">
          <div className="w-32 h-2 bg-green-200 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-green-600 text-sm mt-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            Loading your sustainable journey...
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;