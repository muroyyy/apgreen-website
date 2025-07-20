import React from 'react';
import { ArrowLeft, Trophy, Medal, Star, Crown } from 'lucide-react';
import { Screen } from '../App';

interface LeaderboardProps {
  onNavigate: (screen: Screen) => void;
}

const Leaderboard = ({ onNavigate }: LeaderboardProps) => {
  const leaderboard = [
    { id: 1, name: 'Emma Thompson', points: 2850, rank: 1, level: 'Eco Champion', avatar: '👩' },
    { id: 2, name: 'Alex Chen', points: 1250, rank: 2, level: 'Green Hero', avatar: '👨' },
    { id: 3, name: 'Sarah Johnson', points: 1180, rank: 3, level: 'Green Hero', avatar: '👩' },
    { id: 4, name: 'Mike Rodriguez', points: 950, rank: 4, level: 'Eco Warrior', avatar: '👨' },
    { id: 5, name: 'Lisa Park', points: 890, rank: 5, level: 'Eco Warrior', avatar: '👩' },
    { id: 6, name: 'David Kim', points: 820, rank: 6, level: 'Eco Warrior', avatar: '👨' },
    { id: 7, name: 'Maya Patel', points: 750, rank: 7, level: 'Planet Saver', avatar: '👩' },
    { id: 8, name: 'John Davis', points: 720, rank: 8, level: 'Planet Saver', avatar: '👨' },
  ];

  const weeklyChallenge = {
    title: 'Plastic-Free Week',
    description: 'Avoid single-use plastics for 7 days',
    participants: 234,
    timeLeft: '3 days left'
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="text-yellow-500 w-6 h-6" />;
      case 2:
        return <Medal className="text-gray-400 w-6 h-6" />;
      case 3:
        return <Medal className="text-amber-600 w-6 h-6" />;
      default:
        return <span className="text-gray-500 font-bold w-6 text-center">{rank}</span>;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'from-yellow-400 to-orange-500';
      case 2:
        return 'from-gray-300 to-gray-500';
      case 3:
        return 'from-amber-400 to-amber-600';
      default:
        return 'from-green-400 to-emerald-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-25 to-red-50 p-6">
      {/* Header */}
      <div className="flex items-center mb-8 pt-8">
        <button
          onClick={() => onNavigate('home')}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 mr-4"
        >
          <ArrowLeft className="text-gray-600 w-5 h-5" />
        </button>
        <h1 className="text-2xl font-bold text-orange-800" style={{ fontFamily: 'Luckiest Guy, cursive' }}>
          Leaderboard
        </h1>
      </div>

      {/* Weekly Challenge Banner */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-300 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
        <div className="relative z-10">
          <div className="flex items-center mb-3">
            <Star className="text-orange-500 w-6 h-6 mr-2" />
            <h2 className="text-lg font-bold text-orange-800" style={{ fontFamily: 'Luckiest Guy, cursive' }}>
              Weekly Challenge
            </h2>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">{weeklyChallenge.title}</h3>
          <p className="text-gray-600 mb-3">{weeklyChallenge.description}</p>
          <div className="flex items-center justify-between text-sm">
            <span className="text-orange-600 font-medium">
              {weeklyChallenge.participants} participants
            </span>
            <span className="text-orange-600 font-medium">
              {weeklyChallenge.timeLeft}
            </span>
          </div>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="flex items-end justify-center space-x-4 mb-8">
        {/* 2nd Place */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center shadow-lg mb-2">
            <span className="text-2xl">{leaderboard[1].avatar}</span>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-md">
            <Medal className="text-gray-400 w-6 h-6 mx-auto mb-1" />
            <p className="font-bold text-gray-800 text-sm" style={{ fontFamily: 'Luckiest Guy, cursive' }}>
              {leaderboard[1].name.split(' ')[0]}
            </p>
            <p className="text-xs text-gray-600">{leaderboard[1].points} pts</p>
          </div>
        </div>

        {/* 1st Place */}
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg mb-2">
            <span className="text-3xl">{leaderboard[0].avatar}</span>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-lg">
            <Crown className="text-yellow-500 w-8 h-8 mx-auto mb-2" />
            <p className="font-bold text-gray-800" style={{ fontFamily: 'Luckiest Guy, cursive' }}>
              {leaderboard[0].name.split(' ')[0]}
            </p>
            <p className="text-sm text-gray-600">{leaderboard[0].points} pts</p>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg mb-2">
            <span className="text-2xl">{leaderboard[2].avatar}</span>
          </div>
          <div className="bg-white rounded-xl p-3 shadow-md">
            <Medal className="text-amber-600 w-6 h-6 mx-auto mb-1" />
            <p className="font-bold text-gray-800 text-sm" style={{ fontFamily: 'Luckiest Guy, cursive' }}>
              {leaderboard[2].name.split(' ')[0]}
            </p>
            <p className="text-xs text-gray-600">{leaderboard[2].points} pts</p>
          </div>
        </div>
      </div>

      {/* Full Leaderboard */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-orange-800 mb-4" style={{ fontFamily: 'Luckiest Guy, cursive' }}>
          Full Rankings
        </h3>
        <div className="space-y-3">
          {leaderboard.map((user, index) => (
            <div
              key={user.id}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                user.rank === 2 ? 'border-green-200 bg-green-50' : 'border-gray-200 hover:border-green-200'
              }`}
            >
              <div className="flex items-center space-x-4">
                {/* Rank */}
                <div className="flex items-center justify-center w-8">
                  {getRankIcon(user.rank)}
                </div>

                {/* Avatar */}
                <div className={`w-12 h-12 bg-gradient-to-br ${getRankColor(user.rank)} rounded-full flex items-center justify-center shadow-md`}>
                  <span className="text-xl">{user.avatar}</span>
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-800" style={{ fontFamily: 'Luckiest Guy, cursive' }}>
                        {user.name}
                      </p>
                      <p className="text-gray-600 text-sm">{user.level}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-600">{user.points.toLocaleString()}</p>
                      <p className="text-gray-500 text-xs">eco points</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Banner */}
      <div className="mt-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl p-4 text-white shadow-lg">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <Trophy className="text-white w-5 h-5" />
          </div>
          <div>
            <p className="font-bold" style={{ fontFamily: 'Rubik, sans-serif' }}>
              🔔 You moved up 2 spots this week!
            </p>
            <p className="text-green-100 text-sm">Keep up the great work to reach the top 10!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;