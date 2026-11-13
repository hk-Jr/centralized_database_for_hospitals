import React from 'react';
import LandingPage from './components/landingPage/LandingPage';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      {/* Root Route (/) Renders the Landing Page */}
      <LandingPage />
    </div>
  );
}
