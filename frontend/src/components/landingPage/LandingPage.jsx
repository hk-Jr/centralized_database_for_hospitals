import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutSection from './AboutSection';
import ObjectivesSection from './ObjectivesSection';
import HowItWorksSection from './HowItWorksSection';
import SecuritySection from './SecuritySection';
import CtaSection from './CtaSection';
import Footer from './Footer';
import SignUpModal from './SignUpModal';
import './LandingPage.css';

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenSignUp = () => {
    setIsModalOpen(true);
  };

  const handleCloseSignUp = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="landing-page">
      {/* Top Navigation */}
      <Navbar onSignUpClick={handleOpenSignUp} />

      {/* Main Landing Page Content */}
      <main id="main-content" className="landing-main-content">
        {/* 1. Hero Section */}
        <Hero onSignUpClick={handleOpenSignUp} />

        {/* 2. About the Project */}
        <AboutSection />

        {/* 3. Key Objectives */}
        <ObjectivesSection />

        {/* 4. How the Platform Works */}
        <HowItWorksSection />

        {/* 5. Security & Privacy */}
        <SecuritySection />

        {/* 6. Call to Action */}
        <CtaSection onSignUpClick={handleOpenSignUp} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Visually functional Sign Up Notice Modal */}
      <SignUpModal isOpen={isModalOpen} onClose={handleCloseSignUp} />
    </div>
  );
}

