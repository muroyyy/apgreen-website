import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import EndOfDayDeals from './components/EndOfDayDeals';
import FoodBank from './components/FoodBank';
import Challenges from './components/Challenges';
import GroupDelivery from './components/GroupDelivery';
import Profile from './components/Profile';
import Leaderboard from './components/Leaderboard';

export type Screen = 'splash' | 'home' | 'deals' | 'foodbank' | 'challenges' | 'delivery' | 'profile' | 'leaderboard';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [user, setUser] = useState({
    name: 'Alex Chen',
    studentId: 'STU2025001',
    ecoPoints: 1250,
    level: 'Green Hero',
    completedChallenges: 12,
    claimedMeals: 8
  });

  useEffect(() => {
    // Auto-navigate from splash screen after 3 seconds
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('home');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'home':
        return <HomeScreen user={user} onNavigate={setCurrentScreen} />;
      case 'deals':
        return <EndOfDayDeals onNavigate={setCurrentScreen} />;
      case 'foodbank':
        return <FoodBank onNavigate={setCurrentScreen} />;
      case 'challenges':
        return <Challenges onNavigate={setCurrentScreen} user={user} setUser={setUser} />;
      case 'delivery':
        return <GroupDelivery onNavigate={setCurrentScreen} />;
      case 'profile':
        return <Profile user={user} onNavigate={setCurrentScreen} />;
      case 'leaderboard':
        return <Leaderboard onNavigate={setCurrentScreen} />;
      default:
        return <HomeScreen user={user} onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-25 to-teal-50">
      {renderScreen()}
    </div>
  );
}

export default App;