import React from 'react';
import { ShieldCheckIcon, ArrowRightIcon, DatabaseIcon } from '../icons/Icons';

export default function CtaSection({ onSignUpClick }) {
  return (
    <section className="section section-cta">
      <div className="container">
        <div className="cta-card">
          <div className="cta-background-pattern" aria-hidden="true"></div>
          
          <div className="cta-content">
            <div className="cta-badge">
              <DatabaseIcon size={18} />
              <span>The Future of Hospital Data Management</span>
            </div>

            <h2 className="cta-title">
              Ready to Centralize and Safeguard <br />
              <span className="gradient-text">Hospital Information Systems?</span>
            </h2>

            <p className="cta-description">
              Join healthcare administrators, physicians, and patients in building a connected medical ecosystem where records are never lost, access is strictly authorized, and patient outcomes come first.
            </p>

            <div className="cta-actions">
              <button 
                type="button" 
                className="btn btn-primary btn-lg"
                onClick={onSignUpClick}
              >
                <span>Request Early Access / Sign Up</span>
                <ArrowRightIcon size={20} />
              </button>
            </div>

            <div className="cta-security-note">
              <ShieldCheckIcon size={16} />
              <span>Role-Based Access Governance • Strict Patient Confidentiality • Zero Data Silos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

