// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the page components
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import ConnectPage from './pages/ConnectPage';
import ResourcePage from './pages/ResourcePage';
import JobListingPage from './pages/JobListingPage';
import MentorshipPage from './pages/MentorshipPage';
import MentorshipDetailsPage from './pages/MentorshipDetailsPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Set as the main landing route */}
        <Route path="/homepage" element={<HomePage />} /> {/* Optional: Change homepage path */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/opportunities" element={<JobListingPage />} />
        <Route path="/mentorship" element={<MentorshipPage />} />
        <Route path="/mentorship/details" element={<MentorshipDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;