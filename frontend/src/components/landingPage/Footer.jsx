import React from 'react';
import { DatabaseIcon, ShieldCheckIcon } from '../icons/Icons';

const CURRENT_YEAR = 2026;

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          {/* Brand & Mission */}
          <div className="footer-brand-column">
            <div className="navbar-brand">
              <div className="brand-logo-wrapper">
                <DatabaseIcon size={24} className="brand-icon" />
              </div>
              <div className="brand-text">
                <span className="brand-title">MedCentral<span className="brand-accent">DBMS</span></span>
                <span className="brand-tagline">Centralized Hospital Database</span>
              </div>
            </div>
            <p className="footer-about-text">
              An enterprise platform engineered to organize, protect, and interconnect hospital records, clinical workflows, and patient histories under verified role-based access rules.
            </p>
            <div className="footer-phase-badge">
              <span className="phase-dot"></span>
              <span>Phase 1 Completed: Public Landing Page</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-column">
            <h4>System Overview</h4>
            <ul>
              <li><a href="#about">About the Project</a></li>
              <li><a href="#objectives">Key Objectives</a></li>
              <li><a href="#how-it-works">How the Platform Works</a></li>
              <li><a href="#security">Security & Privacy Controls</a></li>
            </ul>
          </div>

          {/* Core Roles */}
          <div className="footer-links-column">
            <h4>Access Roles</h4>
            <ul>
              <li><a href="#security">Hospital Administrators</a></li>
              <li><a href="#security">Licensed Treating Doctors</a></li>
              <li><a href="#security">Verified Patients</a></li>
              <li><a href="#security">Authorization Policies</a></li>
            </ul>
          </div>

          {/* Architecture Pillars */}
          <div className="footer-links-column">
            <h4>Finalized Tech Stack</h4>
            <ul className="footer-tech-list">
              <li><span className="tech-badge">Frontend: React.js</span></li>
              <li><span className="tech-badge">Backend: Python Architecture</span></li>
              <li><span className="tech-badge">Connectivity: Supabase Layer</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {CURRENT_YEAR} Centralized Database Management System for Hospitals. All rights reserved.
          </p>
          <div className="footer-bottom-compliance">
            <ShieldCheckIcon size={14} />
            <span>Built for strict healthcare privacy and role-based data integrity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

