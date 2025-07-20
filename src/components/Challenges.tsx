import React, { useState } from 'react';
import { ArrowLeft, Camera, Upload, Trophy, Star, Target, CheckCircle } from 'lucide-react';
import { Screen } from '../App';

interface ChallengesProps {
  onNavigate: (screen: Screen) => void;
  user: {
    name: string;
    ecoPoints: number;
    completedChallenges: number;
  };
  setUser: (user: any) => void;
}

const Challenges = ({ onNavigate, user, setUser }: ChallengesProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const currentChallenge = {
    id: 1,
    title: 'Use a Reusable Container',
    description: 'Bring your own container when buying food on campus. Take a photo of your meal in a reusable container!',
    points: 50,
    deadline: 'Ends in 3 days',
    difficulty: 'Easy',
    icon: '♻️'
  };

  const weeklyProgress = {
    completed: 3,
    total: 5,
    percentage: 60
  };

  const badges = [
    { id: 1, name: 'Eco Warrior', icon: '🌱', earned: true },
    { id: 2, name: 'Waste Reducer', icon: '🗑️', earned: true },
    { id: 3, name: 'Green Hero', icon: '🦸', earned: true },
    { id: 4, name: 'Planet Saver', icon: '🌍', earned: false },
    { id: 5, name: 'Sustainability Star', icon: '⭐', earned: false },
  ];

  const pastChallenges = [
    { id: 1, title: 'Bike to Campus', points: 30, completed: true },
    { id: 2, title: 'Zero Waste Lunch', points: 40, completed: true },
    { id: 3, title: 'Plant-Based Meal', points: 35, completed: true },
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 20;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            // Complete challenge
            setUser({
              ...user,
              ecoPoints: user.ecoPoints + currentChallenge.points,
              completedChallenges: user.completedChallenges + 1
            });
            setUploadProgress(0);
            setSelectedFile(null);
          }, 500);
        }
      }, 300);
    }
  };

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
        <h1 className="text-2xl font-bold text-green-800" style={{ fontFamily: 'Chewy, cursive' }}>
          Eco Challenges
        </h1>
      </div>

      {/* Weekly Progress */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-green-800" style={{ fontFamily: 'Chewy, cursive' }}>
              This Week's Progress
            </h2>
            <Trophy className="text-yellow-500 w-6 h-6" />
          </div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {weeklyProgress.completed}/{weeklyProgress.total} challenges completed
            </span>
            <span className="text-green-600 font-bold">
              {weeklyProgress.percentage}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
            <div 
              className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${weeklyProgress.percentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Current Challenge */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="text-4xl">{currentChallenge.icon}</div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Chewy, cursive' }}>
                {currentChallenge.title}
              </h3>
              <div className="flex items-center space-x-2">
                <Star className="text-yellow-500 w-5 h-5" />
                <span className="text-green-600 font-bold">{currentChallenge.points} pts</span>
              </div>
            </div>
            <p className="text-gray-600 mb-3 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {currentChallenge.description}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
              <span>{currentChallenge.deadline}</span>
              <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">
                {currentChallenge.difficulty}
              </span>
            </div>
          </div>
        </div>

        {/* Photo Upload */}
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
          {!selectedFile ? (
            <>
              <Camera className="text-gray-400 w-12 h-12 mx-auto mb-4" />
              <h4 className="text-lg font-medium text-gray-700 mb-2">Upload Your Proof</h4>
              <p className="text-gray-500 mb-4">Take a photo of your reusable container with food</p>
              <label className="bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600 transition-colors duration-200 cursor-pointer inline-flex items-center space-x-2">
                <Upload className="w-4 h-4" />
                <span>Choose Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            </>
          ) : (
            <div>
              <CheckCircle className="text-green-500 w-12 h-12 mx-auto mb-4" />
              <h4 className="text-lg font-medium text-green-700 mb-2">Uploading...</h4>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              {uploadProgress === 100 && (
                <p className="text-green-600 font-medium">
                  Challenge completed! +{currentChallenge.points} eco points earned! 🎉
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Badges */}
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <h3 className="text-lg font-bold text-green-800 mb-4" style={{ fontFamily: 'Chewy, cursive' }}>
          Your Badges
        </h3>
        <div className="grid grid-cols-5 gap-3">
          {badges.map((badge) => (
            <div key={badge.id} className="text-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                badge.earned ? 'bg-yellow-100' : 'bg-gray-100'
              }`}>
                <span className={`text-2xl ${badge.earned ? '' : 'grayscale opacity-50'}`}>
                  {badge.icon}
                </span>
              </div>
              <p className={`text-xs font-medium ${
                badge.earned ? 'text-green-600' : 'text-gray-400'
              }`}>
                {badge.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Past Challenges */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-green-800 mb-4" style={{ fontFamily: 'Chewy, cursive' }}>
          Completed Challenges
        </h3>
        <div className="space-y-3">
          {pastChallenges.map((challenge) => (
            <div key={challenge.id} className="flex items-center justify-between p-3 bg-green-50 rounded-xl">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500 w-5 h-5" />
                <span className="font-medium text-gray-800">{challenge.title}</span>
              </div>
              <span className="text-green-600 font-bold">+{challenge.points} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Challenges;