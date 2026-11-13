import React, { useEffect } from 'react';
import { CloseIcon, ShieldCheckIcon, LockIcon } from '../icons/Icons';

export default function SignUpModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          aria-label="Close dialog"
        >
          <CloseIcon size={20} />
        </button>

        <div className="modal-badge">
          <ShieldCheckIcon size={22} className="modal-badge-icon" />
          <span>System Initialization Phase</span>
        </div>

        <h3 id="modal-title" className="modal-title">
          Sign Up & Role Onboarding
        </h3>

        <div className="modal-body">
          <p>
            Welcome to the <strong>Centralized Database Management System for Hospitals</strong>. 
            In alignment with the phased architectural roadmap:
          </p>
          <ul className="modal-feature-list">
            <li>
              <div className="list-icon-wrapper">
                <LockIcon size={16} />
              </div>
              <div>
                <strong>Strict Role Provisioning:</strong> Authentication profiles for <em>Hospitals</em>, <em>Doctors</em>, and <em>Patients</em> are scheduled for activation in Phase 2.
              </div>
            </li>
            <li>
              <div className="list-icon-wrapper">
                <ShieldCheckIcon size={16} />
              </div>
              <div>
                <strong>Secure Database Integration:</strong> Direct backend validation and Supabase connectivity will be established during the dedicated authentication milestone.
              </div>
            </li>
          </ul>
          <p className="modal-note">
            Please proceed with reviewing the architecture, core objectives, and role-based access models presented on this landing page.
          </p>
        </div>

        <div className="modal-footer">
          <button className="btn btn-primary modal-action-btn" onClick={onClose}>
            Acknowledge & Continue
          </button>
        </div>
      </div>
    </div>
  );
}

