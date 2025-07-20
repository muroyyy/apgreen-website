import React from 'react';
import { TrendingDown, Target, Utensils, Package, User, Trophy, Leaf, Heart } from 'lucide-react';
import { Screen } from '../App';

interface HomeScreenProps {
  user: {
    name: string;
    ecoPoints: number;
    level: string;
  };
  onNavigate: (screen: Screen) => void;
}

const HomeScreen = ({ user, onNavigate }: HomeScreenProps) => {
  const menuItems = [
    {
      id: 'deals',
      title: 'End-of-Day Deals',
      subtitle: 'Save money & reduce waste',
      icon: TrendingDown,
      color: 'from-orange-400 to-red-400',
      screen: 'deals' as Screen
    },
    {
      id: 'challenges',
      title: 'Eco Challenges',
      subtitle: 'Weekly sustainability goals',
      icon: Target,
      color: 'from-green-400 to-emerald-500',
      screen: 'challenges' as Screen
    },
    {
      id: 'foodbank',
      title: 'Claim Unsold Food',
      subtitle: 'Free meals for students',
      icon: Utensils,
      color: 'from-blue-400 to-cyan-500',
      screen: 'foodbank' as Screen
    },
    {
      id: 'delivery',
      title: 'Group Delivery',
      subtitle: 'Share rides, save planet',
      icon: Package,
      color: 'from-purple-400 to-pink-500',
      screen: 'delivery' as Screen
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-25 to-teal-50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pt-8">
        <div>
          <h1 className="text-2xl font-bold text-green-800" style={{ fontFamily: 'Baloo 2, cursive' }}>
            Hello, {user.name}! 👋
          </h1>
          <p className="text-green-600" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            Ready to make a difference today?
          </p>
        </div>
        <button
          onClick={() => onNavigate('profile')}
          className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <User className="text-white w-6 h-6" />
        </button>
      </div>

      {/* Eco Points Card */}
      <div className="bg-white rounded-3xl p-6 shadow-lg mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-green-800" style={{ fontFamily: 'Baloo 2, cursive' }}>
              Your Eco Impact
            </h2>
            <Leaf className="text-green-500 w-6 h-6" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold text-green-600">{user.ecoPoints.toLocaleString()}</p>
              <p className="text-green-700 font-medium">Eco Points</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-green-800">{user.level}</p>
              <p className="text-green-600 text-sm">Current Level</p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('leaderboard')}
            className="mt-4 flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors duration-200"
          >
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-medium">View Leaderboard</span>
          </button>
        </div>
      </div>

      {/* Main Menu */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.screen)}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            <div className="relative z-10">
              <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-md`}>
                <item.icon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2" style={{ fontFamily: 'Baloo 2, cursive' }}>
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                {item.subtitle}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-green-800 mb-4" style={{ fontFamily: 'Baloo 2, cursive' }}>
          Today's Impact
        </h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <Heart className="text-red-400 w-8 h-8 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800">3</p>
            <p className="text-gray-600 text-xs">Meals Saved</p>
          </div>
          <div className="text-center">
            <Leaf className="text-green-500 w-8 h-8 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800">50</p>
            <p className="text-gray-600 text-xs">Points Earned</p>
          </div>
          <div className="text-center">
            <Target className="text-blue-500 w-8 h-8 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-800">1</p>
            <p className="text-gray-600 text-xs">Challenge Done</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;