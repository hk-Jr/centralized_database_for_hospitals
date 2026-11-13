import React from 'react';
import { 
  AlertCircleIcon, 
  CheckCircleIcon, 
  DatabaseIcon, 
  NetworkIcon, 
  FileTextIcon 
} from '../icons/Icons';

export default function AboutSection() {
  return (
    <section id="about" className="section section-about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">Project Background & Rationale</span>
          <h2 className="section-title">
            Transforming Fragmented Records into a <br />
            <span className="gradient-text">Unified Healthcare Foundation</span>
          </h2>
          <p className="section-subtitle">
            Modern healthcare relies on immediate, accurate medical insights. Yet, the majority of healthcare records remain trapped inside isolated systems, causing delays, diagnostic risks, and lost patient histories.
          </p>
        </div>

        {/* Comparison: The Problem vs The Centralized Solution */}
        <div className="about-comparison-grid">
          {/* Card 1: The Fragmented Reality */}
          <div className="comparison-card problem-card">
            <div className="card-badge badge-warning">
              <AlertCircleIcon size={16} />
              <span>Current Healthcare Challenges</span>
            </div>
            <h3 className="comparison-title">The Fragmented Record Crisis</h3>
            <p className="comparison-description">
              When patients visit multiple clinics or transfer between hospitals, their vital medical histories are rarely synchronized.
            </p>
            <ul className="comparison-list">
              <li>
                <strong>Data Silos & Isolation:</strong> Each hospital maintains closed databases that cannot exchange vital patient history.
              </li>
              <li>
                <strong>Redundant & Duplicate Tests:</strong> Patients undergo repeated, costly diagnostic procedures due to missing historical records.
              </li>
              <li>
                <strong>Administrative Bottlenecks:</strong> Manual paper records or disjointed software create immense delays in emergency situations.
              </li>
              <li>
                <strong>Clinical Blindspots:</strong> Treating doctors frequently operate without knowledge of prior drug allergies, chronic conditions, or previous treatments.
              </li>
            </ul>
          </div>

          {/* Card 2: The Centralized Solution */}
          <div className="comparison-card solution-card">
            <div className="card-badge badge-success">
              <CheckCircleIcon size={16} />
              <span>The MedCentral Approach</span>
            </div>
            <h3 className="comparison-title">The Centralized Management Solution</h3>
            <p className="comparison-description">
              Our Centralized Database Management System establishes a single, definitive source of truth across healthcare institutions.
            </p>
            <ul className="comparison-list">
              <li>
                <strong>Consolidated Medical History:</strong> A lifelong, unified health profile accessible instantly upon verified medical authorization.
              </li>
              <li>
                <strong>Structured Entity Relationships:</strong> Explicit, relational links connecting hospitals, licensed doctors, and patients.
              </li>
              <li>
                <strong>Elimination of Data Duplication:</strong> Shared diagnostic logs and prescriptions ensure high clinical data integrity.
              </li>
              <li>
                <strong>Scalable Multi-Hospital Architecture:</strong> A foundational blueprint designed for seamless federation and multi-center hospital integration.
              </li>
            </ul>
          </div>
        </div>

        {/* Strategic Pillars of Organization */}
        <div className="about-pillars-container">
          <div className="about-pillar">
            <div className="pillar-icon">
              <DatabaseIcon size={24} />
            </div>
            <div className="pillar-body">
              <h4>Structured Data Governance</h4>
              <p>
                Enforces standardized healthcare schema rules so clinical notes, lab reports, and medication histories adhere to consistent formats.
              </p>
            </div>
          </div>

          <div className="about-pillar">
            <div className="pillar-icon">
              <FileTextIcon size={24} />
            </div>
            <div className="pillar-body">
              <h4>Lifelong Record Continuity</h4>
              <p>
                Ensures that a patient's historical treatment records travel with them across institutions without loss of data integrity or clinical detail.
              </p>
            </div>
          </div>

          <div className="about-pillar">
            <div className="pillar-icon">
              <NetworkIcon size={24} />
            </div>
            <div className="pillar-body">
              <h4>Interoperability by Design</h4>
              <p>
                Eliminates proprietary vendor lock-in by providing standard integration interfaces for future hospital hospital-tier expansion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

