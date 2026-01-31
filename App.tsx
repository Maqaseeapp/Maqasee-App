import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { ToastProvider } from './components/UI.tsx';
import { Landing } from './pages/Landing.tsx';
import { Auth } from './pages/Auth.tsx';
import { Dashboard } from './pages/Dashboard.tsx';
import { ProfileNew } from './pages/ProfileNew.tsx';
import { SizeFinder } from './pages/SizeFinder.tsx';
import { Discover } from './pages/Discover.tsx';
import { Profile } from './pages/Profile.tsx';
import { History } from './pages/History.tsx';
import { Scan } from './pages/Scan.tsx';
import { SizeFriends } from './pages/SizeFriends.tsx';
import { Compare } from './pages/Compare.tsx';
import { Admin } from './pages/Admin.tsx';
import { SnapShop } from './pages/SnapShop.tsx';

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