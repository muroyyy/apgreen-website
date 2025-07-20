import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Users, Upload, Plus } from 'lucide-react';
import { Screen } from '../App';

interface FoodBankProps {
  onNavigate: (screen: Screen) => void;
}

const FoodBank = ({ onNavigate }: FoodBankProps) => {
  const [isStaff, setIsStaff] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const availableFood = [
    {
      id: 1,
      item: 'Fresh Sandwiches',
      quantity: '12 pieces',
      expiry: '6:00 PM today',
      location: 'Campus Cafe',
      image: '🥪',
      claimed: false
    },
    {
      id: 2,
      item: 'Fruit Salad Cups',
      quantity: '8 cups',
      expiry: '7:00 PM today',
      location: 'Healthy Corner',
      image: '🥗',
      claimed: false
    },
    {
      id: 3,
      item: 'Pasta Portions',
      quantity: '15 portions',
      expiry: '8:00 PM today',
      location: 'Italian Express',
      image: '🍝',
      claimed: true
    },
    {
      id: 4,
      item: 'Muffins & Pastries',
      quantity: '20 pieces',
      expiry: '5:30 PM today',
      location: 'Bakery Corner',
      image: '🧁',
      claimed: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-25 to-teal-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pt-8">
        <div className="flex items-center">
          <button
            onClick={() => onNavigate('home')}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 mr-4"
          >
            <ArrowLeft className="text-gray-600 w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold text-blue-800" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Food Bank
          </h1>
        </div>
        <button
          onClick={() => setIsStaff(!isStaff)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            isStaff 
              ? 'bg-blue-500 text-white' 
              : 'bg-white text-blue-500 border border-blue-500'
          }`}
        >
          {isStaff ? 'Student View' : 'Staff View'}
        </button>
      </div>

      {!isStaff ? (
        <>
          {/* Student Registration */}
          {!showRegistration ? (
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <h2 className="text-lg font-bold text-blue-800 mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Need Free Meals?
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Register as a recipient to access free unsold food from campus restaurants. Help reduce waste while getting nutritious meals!
              </p>
              <button
                onClick={() => setShowRegistration(true)}
                className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors duration-200"
              >
                Register as Recipient
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <h2 className="text-lg font-bold text-blue-800 mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Registration Form
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none"
                />
                <input
                  type="text"
                  placeholder="Student ID"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none"
                />
                <textarea
                  placeholder="Brief reason for registration (optional)"
                  rows={3}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none resize-none"
                />
                <div className="flex space-x-3">
                  <button
                    onClick={() => setShowRegistration(false)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:bg-gray-300 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors duration-200">
                    Submit Registration
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Available Food List */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-800" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Available Food Today
            </h3>
            {availableFood.map((food) => (
              <div key={food.id} className={`bg-white rounded-2xl p-6 shadow-lg ${food.claimed ? 'opacity-60' : ''}`}>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{food.image}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">{food.item}</h4>
                        <p className="text-gray-600 text-sm">{food.quantity}</p>
                      </div>
                      {food.claimed && (
                        <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                          Claimed
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{food.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>Expires: {food.expiry}</span>
                      </div>
                    </div>

                    {!food.claimed && (
                      <button className="w-full bg-green-500 text-white py-2 rounded-xl font-medium hover:bg-green-600 transition-colors duration-200">
                        Claim This Food
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Staff Dashboard */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-blue-800" style={{ fontFamily: 'Nunito, sans-serif' }}>
                Upload New Food
              </h2>
              <Upload className="text-blue-500 w-6 h-6" />
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Food Item Name"
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none"
              />
              <input
                type="text"
                placeholder="Quantity Available"
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none"
              />
              <input
                type="datetime-local"
                placeholder="Expiry Time"
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none"
              />
              <input
                type="text"
                placeholder="Pickup Location"
                className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none"
              />
              <button className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add Food Item</span>
              </button>
            </div>
          </div>

          {/* Manage Existing Items */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-blue-800" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Manage Food Items
            </h3>
            {availableFood.map((food) => (
              <div key={food.id} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{food.image}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">{food.item}</h4>
                        <p className="text-gray-600 text-sm">{food.quantity}</p>
                      </div>
                      <div className="flex items-center space-x-1 text-sm">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">
                          {food.claimed ? '1 claimed' : '0 claimed'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{food.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{food.expiry}</span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button className="flex-1 bg-yellow-500 text-white py-2 rounded-xl font-medium hover:bg-yellow-600 transition-colors duration-200">
                        Edit
                      </button>
                      <button className="flex-1 bg-red-500 text-white py-2 rounded-xl font-medium hover:bg-red-600 transition-colors duration-200">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FoodBank;