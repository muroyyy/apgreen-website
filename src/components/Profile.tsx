import React from 'react';
import { ArrowLeft, Star, Trophy, Clock, Utensils, Target, Award, Leaf } from 'lucide-react';
import { Screen } from '../App';

interface ProfileProps {
  user: {
    name: string;
    studentId: string;
    ecoPoints: number;
    level: string;
    completedChallenges: number;
    claimedMeals: number;
  };
  onNavigate: (screen: Screen) => void;
}

const Profile = ({ user, onNavigate }: ProfileProps) => {
  const recentActivity = [
    { id: 1, type: 'challenge', title: 'Used reusable container', points: 50, date: '2 hours ago' },
    { id: 2, type: 'meal', title: 'Claimed pasta from Italian Express', points: 25, date: '1 day ago' },
    { id: 3, type: 'challenge', title: 'Bike to campus completed', points: 30, date: '2 days ago' },
    { id: 4, type: 'deal', title: 'Saved Mediterranean Bowl', points: 20, date: '3 days ago' },
  ];

  const achievements = [
    { id: 1, title: 'First Challenge', description: 'Completed your first eco challenge', icon: '🎯', earned: true },
    { id: 2, title: 'Meal Saver', description: 'Claimed 5 unsold meals', icon: '🍽️', earned: true },
    { id: 3, title: 'Green Streak', description: '7 days of sustainable actions', icon: '🔥', earned: true },
    { id: 4, title: 'Eco Champion', description: 'Earned 1000+ eco points', icon: '🏆', earned: true },
    { id: 5, title: 'Community Hero', description: 'Helped reduce 50lbs of food waste', icon: '🌍', earned: false },
  ];

  const stats = [
    { label: 'Eco Points', value: user.ecoPoints.toLocaleString(), icon: Star, color: 'text-yellow-500' },
    { label: 'Challenges', value: user.completedChallenges, icon: Target, color: 'text-green-500' },
    { label: 'Meals Saved', value: user.claimedMeals, icon: Utensils, color: 'text-blue-500' },
    { label: 'Days Active', value: '23', icon: Clock, color: 'text-purple-500' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-25 to-teal-50 p-6">
      {/* Header */}
      <div className="flex items-center mb-8 pt-8">
        <button
          onClick={() => onNavigate('home')}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 mr-4"
        >
          <ArrowLeft className="text-gray-600 w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-green-800" style={{ fontFamily: 'Comfortaa, cursive' }}>
          Profile
        </h1>
      </div>

      {/* User Info Card */}
      <div className="bg-white rounded-3xl p-6 shadow-lg mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full -translate-y-20 translate-x-20 opacity-30"></div>
        <div className="relative z-10">
          <div className="flex items-start space-x-4">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-3xl">👤</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-1" style={{ fontFamily: 'Comfortaa, cursive' }}>
                {user.name}
              </h2>
              <p className="text-gray-600 mb-2">ID: {user.studentId}</p>
              <div className="flex items-center space-x-2">
                <div className="bg-green-100 px-3 py-1 rounded-full">
                  <span className="text-green-600 font-medium text-sm">{user.level}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Trophy className="text-yellow-500 w-4 h-4" />
                  <span className="text-gray-600 text-sm">Level 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-lg">
            <div className="flex items-center space-x-3 mb-2">
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
              <span className="text-gray-600 text-sm">{stat.label}</span>
            </div>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <h3 className="text-lg font-bold text-green-800 mb-4" style={{ fontFamily: 'Comfortaa, cursive' }}>
          Achievements
        </h3>
        <div className="space-y-3">
          {achievements.map((achievement) => (
            <div key={achievement.id} className={`p-4 rounded-xl border-2 ${
              achievement.earned 
                ? 'border-green-200 bg-green-50' 
                : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex items-start space-x-3">
                <span className={`text-2xl ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                  {achievement.icon}
                </span>
                <div className="flex-1">
                  <h4 className={`font-bold ${
                    achievement.earned ? 'text-green-800' : 'text-gray-400'
                  }`}>
                    {achievement.title}
                  </h4>
                  <p className={`text-sm ${
                    achievement.earned ? 'text-green-600' : 'text-gray-400'
                  }`}>
                    {achievement.description}
                  </p>
                </div>
                {achievement.earned && (
                  <Award className="text-green-500 w-5 h-5" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-green-800 mb-4" style={{ fontFamily: 'Comfortaa, cursive' }}>
          Recent Activity
        </h3>
        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activity.type === 'challenge' ? 'bg-green-100' :
                activity.type === 'meal' ? 'bg-blue-100' : 'bg-orange-100'
              }`}>
                {activity.type === 'challenge' && <Target className="text-green-500 w-5 h-5" />}
                {activity.type === 'meal' && <Utensils className="text-blue-500 w-5 h-5" />}
                {activity.type === 'deal' && <Leaf className="text-orange-500 w-5 h-5" />}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">{activity.title}</p>
                <p className="text-gray-500 text-sm">{activity.date}</p>
              </div>
              <span className="text-green-600 font-bold">+{activity.points}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;