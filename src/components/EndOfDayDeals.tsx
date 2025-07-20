import React, { useState, useEffect } from 'react';
import { ArrowLeft, Clock, MapPin, Heart, ShoppingCart } from 'lucide-react';
import { Screen } from '../App';

interface EndOfDayDealsProps {
  onNavigate: (screen: Screen) => void;
}

const EndOfDayDeals = ({ onNavigate }: EndOfDayDealsProps) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const deals = [
    {
      id: 1,
      restaurant: 'Campus Cafe',
      dish: 'Mediterranean Bowl',
      originalPrice: 12.99,
      discountedPrice: 6.50,
      discount: 50,
      image: '🥗',
      available: 3,
      pickup: '5:30 PM - 7:00 PM'
    },
    {
      id: 2,
      restaurant: 'Pizza Corner',
      dish: 'Margherita Pizza',
      originalPrice: 18.99,
      discountedPrice: 9.50,
      discount: 50,
      image: '🍕',
      available: 2,
      pickup: '6:00 PM - 8:00 PM'
    },
    {
      id: 3,
      restaurant: 'Asian Fusion',
      dish: 'Chicken Teriyaki',
      originalPrice: 15.99,
      discountedPrice: 7.99,
      discount: 50,
      image: '🍛',
      available: 5,
      pickup: '5:45 PM - 7:30 PM'
    },
    {
      id: 4,
      restaurant: 'Healthy Bites',
      dish: 'Quinoa Power Bowl',
      originalPrice: 13.99,
      discountedPrice: 6.99,
      discount: 50,
      image: '🥙',
      available: 1,
      pickup: '6:15 PM - 8:00 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-25 to-pink-50 p-6">
      {/* Header */}
      <div className="flex items-center mb-8 pt-8">
        <button
          onClick={() => onNavigate('home')}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 mr-4"
        >
          <ArrowLeft className="text-gray-600 w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-orange-800" style={{ fontFamily: 'Fredoka, cursive' }}>
          End-of-Day Deals
        </h1>
      </div>

      {/* Countdown Timer */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200 to-red-300 rounded-full -translate-y-12 translate-x-12 opacity-50"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-4">
            <Clock className="text-orange-500 w-6 h-6 mr-2" />
            <h2 className="text-lg font-bold text-orange-800" style={{ fontFamily: 'Fredoka, cursive' }}>
              Deals End Soon!
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-orange-500 text-sm">Hours</div>
            </div>
            <div className="text-2xl text-orange-400">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-orange-500 text-sm">Minutes</div>
            </div>
            <div className="text-2xl text-orange-400">:</div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-orange-500 text-sm">Seconds</div>
            </div>
          </div>
        </div>
      </div>

      {/* Deals List */}
      <div className="space-y-4">
        {deals.map((deal) => (
          <div key={deal.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="text-5xl">{deal.image}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Fredoka, cursive' }}>
                      {deal.dish}
                    </h3>
                    <p className="text-gray-600 text-sm">{deal.restaurant}</p>
                  </div>
                  <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors duration-200">
                    <Heart className="text-gray-400 hover:text-red-400 w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center space-x-2 mb-3">
                  <MapPin className="text-gray-400 w-4 h-4" />
                  <span className="text-gray-600 text-sm">Pickup: {deal.pickup}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">${deal.discountedPrice}</span>
                    <span className="text-lg text-gray-400 line-through">${deal.originalPrice}</span>
                    <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-xs font-bold">
                      {deal.discount}% OFF
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">{deal.available} left</span>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-4 h-4" />
                    <span>Reserve Now</span>
                  </button>
                  <button className="flex-1 bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition-colors duration-200">
                    Pay & Pick Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EndOfDayDeals;