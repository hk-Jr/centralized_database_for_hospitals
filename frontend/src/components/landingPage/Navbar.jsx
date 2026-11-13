import React, { useState, useEffect } from 'react';
import { DatabaseIcon, MenuIcon, CloseIcon, ShieldCheckIcon } from '../icons/Icons';

export default function Navbar({ onSignUpClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <a href="#root" className="navbar-brand">
          <div className="brand-logo-wrapper">
            <DatabaseIcon size={24} className="brand-icon" />
            <div className="brand-pulse-dot"></div>
          </div>
          <div className="brand-text">
            <span className="brand-title">MedCentral<span className="brand-accent">DBMS</span></span>
            <span className="brand-tagline">Centralized Hospital Database</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#objectives">Objectives</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#security">Security & Privacy</a></li>
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="navbar-actions">
          <button 
            type="button" 
            className="btn btn-primary nav-signup-btn"
            onClick={onSignUpClick}
          >
            <span>Sign Up</span>
            <ShieldCheckIcon size={16} />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            type="button" 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-menu-backdrop" onClick={closeMenu}>
          <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <div className="brand-text">
                <span className="brand-title">MedCentral<span className="brand-accent">DBMS</span></span>
              </div>
              <button className="mobile-close-btn" onClick={closeMenu} aria-label="Close menu">
                <CloseIcon size={20} />
              </button>
            </div>
            <ul className="mobile-nav-links">
              <li><a href="#about" onClick={closeMenu}>About Project</a></li>
              <li><a href="#objectives" onClick={closeMenu}>Key Objectives</a></li>
              <li><a href="#how-it-works" onClick={closeMenu}>How Platform Works</a></li>
              <li><a href="#security" onClick={closeMenu}>Security & Privacy</a></li>
            </ul>
            <div className="mobile-menu-footer">
              <button 
                type="button" 
                className="btn btn-primary mobile-signup-btn"
                onClick={() => {
                  closeMenu();
                  onSignUpClick();
                }}
              >
                Sign Up for Access
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

