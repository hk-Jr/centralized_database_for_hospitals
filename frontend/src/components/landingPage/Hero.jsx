import React from 'react';
import { 
  ShieldCheckIcon, 
  ArrowRightIcon, 
  DatabaseIcon, 
  HospitalIcon, 
  StethoscopeIcon, 
  PatientIcon, 
  LockIcon,
  ActivityIcon 
} from '../icons/Icons';

export default function Hero({ onSignUpClick }) {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Core Value Proposition */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span className="badge-text">Next-Generation Healthcare Architecture</span>
          </div>

          <h1 className="hero-title">
            Centralized Database Management System <br />
            <span className="gradient-text">for Connected Hospitals</span>
          </h1>

          <p className="hero-description">
            A unified, secure, and role-governed healthcare database platform designed to eliminate fragmented medical records, prevent critical data duplication, and enable verified doctors to access vital patient histories under strict authorization boundaries.
          </p>

          <div className="hero-actions">
            <button 
              type="button" 
              className="btn btn-primary btn-lg"
              onClick={onSignUpClick}
            >
              <span>Get Started & Sign Up</span>
              <ArrowRightIcon size={20} />
            </button>
            <a href="#how-it-works" className="btn btn-secondary btn-lg">
              <span>Explore Architecture</span>
            </a>
          </div>

          {/* Quick Metrics / Key Guarantee Strip */}
          <div className="hero-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <ShieldCheckIcon size={20} />
              </div>
              <div className="highlight-text">
                <strong>Role-Based Access</strong>
                <span>Strict boundary controls</span>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <DatabaseIcon size={20} />
              </div>
              <div className="highlight-text">
                <strong>Unified Repository</strong>
                <span>Zero fragmented data</span>
              </div>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <ActivityIcon size={20} />
              </div>
              <div className="highlight-text">
                <strong>Real-Time Sync</strong>
                <span>Synchronized clinical logs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Visual Display */}
        <div className="hero-visual">
          <div className="system-card-preview">
            <div className="preview-header">
              <div className="preview-status">
                <span className="status-indicator"></span>
                <span className="status-label">Centralized System Core Active</span>
              </div>
              <div className="preview-chip">Supabase Connectivity Layer</div>
            </div>

            {/* Central Node Display */}
            <div className="architecture-diagram">
              {/* Central Database Hub */}
              <div className="hub-center">
                <div className="hub-core">
                  <DatabaseIcon size={38} className="hub-icon" />
                  <span className="hub-label">Centralized Hospital DB</span>
                  <span className="hub-sublabel">Unified Storage & Governance</span>
                </div>
                <div className="hub-glow"></div>
              </div>

              {/* Connected Participant Cards */}
              <div className="nodes-grid">
                {/* Node 1: Hospitals */}
                <div className="node-card node-hospital">
                  <div className="node-icon-box">
                    <HospitalIcon size={20} />
                  </div>
                  <div className="node-details">
                    <span className="node-role">Healthcare Institutions</span>
                    <span className="node-desc">Multi-facility registry & facility records</span>
                  </div>
                </div>

                {/* Node 2: Authorized Doctors */}
                <div className="node-card node-doctor">
                  <div className="node-icon-box">
                    <StethoscopeIcon size={20} />
                  </div>
                  <div className="node-details">
                    <span className="node-role">Authorized Doctors</span>
                    <span className="node-desc">Treatment-scoped clinical history access</span>
                  </div>
                </div>

                {/* Node 3: Verified Patients */}
                <div className="node-card node-patient">
                  <div className="node-icon-box">
                    <PatientIcon size={20} />
                  </div>
                  <div className="node-details">
                    <span className="node-role">Verified Patients</span>
                    <span className="node-desc">Confidential personal health records</span>
                  </div>
                </div>
              </div>

              {/* Bottom Security Banner inside Preview */}
              <div className="preview-security-banner">
                <LockIcon size={16} className="sec-banner-icon" />
                <span>Zero cross-patient visibility • Encrypted doctor-patient relationships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

