import React, { useState } from 'react';
import { ArrowLeft, Truck, Clock, Users, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Screen } from '../App';

interface GroupDeliveryProps {
  onNavigate: (screen: Screen) => void;
}

const GroupDelivery = ({ onNavigate }: GroupDeliveryProps) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(null);
  const [cart, setCart] = useState<{[key: number]: number}>({});
  const [isInProgress, setIsInProgress] = useState(false);

  const restaurants = [
    {
      id: 1,
      name: 'Thai Garden',
      cuisine: 'Thai',
      rating: 4.5,
      deliveryTime: '25-35 min',
      minOrder: 15,
      image: '🍜',
      groupOrder: { participants: 8, current: 45, minimum: 60 }
    },
    {
      id: 2,
      name: 'Burger Junction',
      cuisine: 'American',
      rating: 4.2,
      deliveryTime: '20-30 min',
      minOrder: 12,
      image: '🍔',
      groupOrder: { participants: 12, current: 85, minimum: 80 }
    },
    {
      id: 3,
      name: 'Sushi Express',
      cuisine: 'Japanese',
      rating: 4.7,
      deliveryTime: '30-40 min',
      minOrder: 20,
      image: '🍣',
      groupOrder: { participants: 6, current: 35, minimum: 100 }
    }
  ];

  const menuItems = [
    { id: 1, name: 'Pad Thai', price: 12.99, image: '🍝' },
    { id: 2, name: 'Green Curry', price: 13.99, image: '🍛' },
    { id: 3, name: 'Tom Yum Soup', price: 8.99, image: '🍲' },
    { id: 4, name: 'Mango Sticky Rice', price: 6.99, image: '🥭' }
  ];

  const updateCart = (itemId: number, change: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change)
    }));
  };

  const getTotalItems = () => Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const getTotalPrice = () => {
    return Object.entries(cart).reduce((sum, [itemId, qty]) => {
      const item = menuItems.find(i => i.id === parseInt(itemId));
      return sum + (item ? item.price * qty : 0);
    }, 0);
  };

  if (isInProgress) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-25 to-orange-50 p-6 flex flex-col items-center justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-sm w-full">
          <Truck className="text-purple-500 w-16 h-16 mx-auto mb-6 animate-bounce" />
          <h2 className="text-2xl font-bold text-purple-800 mb-4" style={{ fontFamily: 'Varela Round, sans-serif' }}>
            Delivery in Progress
          </h2>
          <div className="bg-orange-100 border border-orange-200 rounded-xl p-4 mb-6">
            <p className="text-orange-800 font-medium">🚚 ETA: 15 minutes</p>
          </div>
          <p className="text-gray-600 mb-6">Your group order from Thai Garden is on its way!</p>
          <button
            onClick={() => setIsInProgress(false)}
            className="w-full bg-purple-500 text-white py-3 rounded-xl font-medium hover:bg-purple-600 transition-colors duration-200"
          >
            Back to Orders
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-25 to-orange-50 p-6">
      {/* Header */}
      <div className="flex items-center mb-8 pt-8">
        <button
          onClick={() => selectedRestaurant ? setSelectedRestaurant(null) : onNavigate('home')}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 mr-4"
        >
          <ArrowLeft className="text-gray-600 w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-purple-800" style={{ fontFamily: 'Varela Round, sans-serif' }}>
          {selectedRestaurant ? restaurants.find(r => r.id === selectedRestaurant)?.name : 'Group Delivery'}
        </h1>
      </div>

      {!selectedRestaurant ? (
        /* Restaurant List */
        <div className="space-y-4">
          <p className="text-gray-600 mb-6" style={{ fontFamily: 'Varela Round, sans-serif' }}>
            Join group orders to save on delivery and reduce environmental impact!
          </p>
          
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="text-5xl">{restaurant.image}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{restaurant.name}</h3>
                      <p className="text-gray-600 text-sm">{restaurant.cuisine} • ⭐ {restaurant.rating}</p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div className="flex items-center space-x-1 mb-1">
                        <Clock className="w-4 h-4" />
                        <span>{restaurant.deliveryTime}</span>
                      </div>
                      <p>Min: ${restaurant.minOrder}</p>
                    </div>
                  </div>

                  {/* Group Order Progress */}
                  <div className="bg-purple-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Users className="text-purple-500 w-4 h-4" />
                        <span className="text-purple-800 font-medium text-sm">
                          {restaurant.groupOrder.participants} people joined
                        </span>
                      </div>
                      <span className="text-purple-600 font-bold text-sm">
                        ${restaurant.groupOrder.current}/${restaurant.groupOrder.minimum}
                      </span>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(100, (restaurant.groupOrder.current / restaurant.groupOrder.minimum) * 100)}%` }}
                      ></div>
                    </div>
                    <p className="text-purple-600 text-xs mt-2">
                      {restaurant.groupOrder.current >= restaurant.groupOrder.minimum 
                        ? 'Ready to order!' 
                        : `$${restaurant.groupOrder.minimum - restaurant.groupOrder.current} needed to unlock delivery`
                      }
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedRestaurant(restaurant.id)}
                    className={`w-full py-3 rounded-xl font-medium transition-colors duration-200 ${
                      restaurant.groupOrder.current >= restaurant.groupOrder.minimum
                        ? 'bg-purple-500 text-white hover:bg-purple-600'
                        : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                    }`}
                  >
                    {restaurant.groupOrder.current >= restaurant.groupOrder.minimum 
                      ? 'Join Group Order' 
                      : 'View Menu & Join'
                    }
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Menu & Cart */
        <div>
          {/* Menu Items */}
          <div className="space-y-4 mb-6">
            <h3 className="text-lg font-bold text-purple-800" style={{ fontFamily: 'Varela Round, sans-serif' }}>
              Menu
            </h3>
            {menuItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{item.image}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                    <p className="text-purple-600 font-bold">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateCart(item.id, -1)}
                      className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors duration-200"
                    >
                      <Minus className="text-purple-600 w-4 h-4" />
                    </button>
                    <span className="text-lg font-bold text-gray-800 w-8 text-center">
                      {cart[item.id] || 0}
                    </span>
                    <button
                      onClick={() => updateCart(item.id, 1)}
                      className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
                    >
                      <Plus className="text-white w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          {getTotalItems() > 0 && (
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-purple-800" style={{ fontFamily: 'Varela Round, sans-serif' }}>
                  Your Order
                </h3>
                <div className="flex items-center space-x-2">
                  <ShoppingCart className="text-purple-500 w-5 h-5" />
                  <span className="text-purple-600 font-medium">{getTotalItems()} items</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xl font-bold text-gray-800 mb-4">
                <span>Total:</span>
                <span className="text-purple-600">${getTotalPrice().toFixed(2)}</span>
              </div>

              <button
                onClick={() => setIsInProgress(true)}
                className="w-full bg-purple-500 text-white py-3 rounded-xl font-medium hover:bg-purple-600 transition-colors duration-200"
              >
                Join Group Order
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GroupDelivery;