
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ToastProvider } from './components/UI';
import { Landing } from './pages/Landing';
import { Auth } from './pages/Auth';
import { Dashboard } from './pages/Dashboard';
import { ProfileNew } from './pages/ProfileNew';
import { SizeFinder } from './pages/SizeFinder';
import { Discover } from './pages/Discover';
import { Profile } from './pages/Profile';
import { History } from './pages/History';
import { Scan } from './pages/Scan';
import { SizeFriends } from './pages/SizeFriends';
import { Compare } from './pages/Compare';
import { Admin } from './pages/Admin';
import { SnapShop } from './pages/SnapShop';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <ToastProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/app" element={<Dashboard />} />
            <Route path="/app/profile/new" element={<ProfileNew />} />
            <Route path="/app/size-finder" element={<SizeFinder />} />
            <Route path="/app/discover" element={<Discover />} />
            <Route path="/app/profile" element={<Profile />} />
            <Route path="/app/history" element={<History />} />
            <Route path="/app/scan" element={<Scan />} />
            <Route path="/app/friends" element={<SizeFriends />} />
            <Route path="/app/compare" element={<Compare />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/app/snapshop" element={<SnapShop />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </ToastProvider>
    </LanguageProvider>
  );
};

export default App;
